import React, { useState, useEffect } from 'react';
import Select from "react-select"

const AdditionalCosts = ({ formData, setFormData }) => {

  useEffect(() => {
    console.log(costsTypes)
    console.log(costTypeOptions)
    console.log(costTypeOptionsSelected)
    console.log(formData)
  });

  const DROP_DOWN_IDS = {
    COST_TYPE: "costType",
    CALC_TYPE: "calcType",
  }

  const [costsTypes, setCostsTypes] = useState([]);

  //type of costs drowpdown
  const [costTypeOptionsSelected, setCostTypeOptionsSelected] = useState([])
  const [costTypeOptions, setCostTypeOptions] = useState([
    { value: "cleaning", label: "Cleaning", disabled: false },
    { value: "gas", label: "gas", disabled: false },
    { value: "water", label: "water" },
    { value: "crib", label: "crib" },
    { value: "firewood", label: "firewood" },
    { value: "internet", label: "internet" },
    { value: "air-conditioner", label: "air conditioner" },
    { value: "bed-linen", label: "bed linen" },
    { value: "towel", label: "towel" },
    { value: "electricity", label: "electricity" },
    { value: "heating", label: "heating" },
    { value: "booking-fee", label: "booking fee" },
    { value: "laundry-package", label: "laundry package" },
    { value: "pets", label: "pets" },
    { value: "final-cleaning-for-pets", label: "final cleaning for pets" },
    { value: "high-chair", label: "high chair" },
    { value: "garage-parking", label: "Garage / Parking" },
    { value: "washing-machine", label: "Washing Machine" },
    { value: "baby-bed", label: "baby bed" },
    { value: "dryer", label: "dryer" },
    { value: "sauna", label: "sauna" },
    { value: "bike", label: "bike" },
    { value: "pool", label: "pool" },
    { value: "breakfast", label: "breakfast" },
    { value: "bread-service", label: "bread service" },
    { value: "half-board", label: "half board" },
    { value: "full-board", label: "full board" }
  ]);

  //are being calculated drowpdown
  const calcTypeOptions = [
    { value: "inclusive", label: "inclusive" },
    { value: "once-off", label: "once off" },
    { value: "per-kwh", label: "per kWh" },
    { value: "per-m-sq", label: "per m3" },
    { value: "per-night", label: "per night" },
    { value: "per-liter", label: "per liter" }
  ];

  const addRow = () => {
    //stop adding rows when you reach the maximum number of rows (options)
    (costsTypes.length !== (costTypeOptions.length + costTypeOptionsSelected.length)) &&
      setCostsTypes((previousState) => [
        ...previousState,
        {
          id: previousState.length === 0
            ? 1
            : previousState[previousState.length - 1].id + 1
        }
      ])
  }

  const deleteRow = (index, id) => {
    setCostsTypes([
      ...costsTypes.slice(0, index),
      ...costsTypes.slice(index + 1)
    ])

    // setCostTypeOptions([...costTypeOptionsSelected.filter(element => element.id === id), ...costTypeOptions]) or
    setCostTypeOptions((previousState) => [
      ...costTypeOptionsSelected.filter(element => element.id === id),
      ...previousState
    ])

    //remove the old id element then add the new selected id element
    const copy = [...costTypeOptionsSelected.filter(element => element.id !== id)]
    setCostTypeOptionsSelected(copy)
  }

  const removeFromFormData = (id) => {
    let additionalCosts = [...formData.additionalCosts]

    let location = additionalCosts.findIndex(cost => cost.id === id)

    setFormData({
      ...formData,
      additionalCosts: [...additionalCosts.slice(0, location), ...additionalCosts.slice(location + 1)]
    })
  }

  const handleSelectedRow = (e, index, id) => {
    //we remove the selected option from dropdown
    setCostTypeOptions(costTypeOptions.filter(element => element.value !== e.value))
    //if there is an elemnt with the same id in the stateSelected then save it in variable previous and return it to the stateOptions
    const previousSelectedOption = costTypeOptionsSelected.filter(element => element.id === id)
    previousSelectedOption.length !== 0 && setCostTypeOptions((previousState) => [
      //or previousSelectedOption[0]
      ...previousSelectedOption,
      ...previousState
    ])
    //remove the old id element then add the new selected id element
    const copy = [...costTypeOptionsSelected.filter(element => element.id !== id), { id: id, value: e.value, label: e.label }]
    setCostTypeOptionsSelected(copy)

    const newArr = [...costsTypes]
    newArr[index].value = e.value
    newArr[index].label = e.label

    setCostsTypes(newArr)

  }

  //FORMDATA
  const addToFormData = (e, id, dropdownType) => {
    let additionalCosts = [...formData.additionalCosts]

    let location = additionalCosts.findIndex(cost => cost.id === id)

    if (dropdownType === DROP_DOWN_IDS.COST_TYPE) {
      location !== -1
        ? additionalCosts[location].costType = e.value
        : additionalCosts.push({ id: id, costType: e.value })
    }
    else if (dropdownType === DROP_DOWN_IDS.CALC_TYPE) additionalCosts[location].calcType = e.value
    else additionalCosts[location].price = e.target.value

    setFormData({ ...formData, additionalCosts: additionalCosts })
  }

  const handleDisabledOption = (id) => 
    costTypeOptionsSelected.findIndex(cost => cost.id === id) === -1

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Type of costs</th>
            <th>are being calculated</th>
            <th>price</th>
            <th>optional</th>
          </tr>
          {
            costsTypes.map((elm, index) =>
            (
              <>
                <tr>
                  <td>
                    id: {elm.id}
                    <br />
                    index: {index}
                    <Select id={DROP_DOWN_IDS.COST_TYPE} name={DROP_DOWN_IDS.COST_TYPE}
                      options={costTypeOptions}
                      value={{ value: elm.value, label: elm.label }}
                      onChange={(e) => {
                        handleSelectedRow(e, index, elm.id)
                        addToFormData(e, elm.id, DROP_DOWN_IDS.COST_TYPE)
                      }}
                    />
                  </td>
                  <td>
                    <Select id={DROP_DOWN_IDS.CALC_TYPE + index} name={DROP_DOWN_IDS.CALC_TYPE + index}
                      options={calcTypeOptions}
                      isOptionDisabled={() => handleDisabledOption(elm.id)}
                      onChange={(e) => {addToFormData(e, elm.id, DROP_DOWN_IDS.CALC_TYPE) }}
                    />
                  </td>
                  <td>
                    <input
                      type="number" min="0" max="1000000" placeholder="0" step="0.01" maxLength="6"
                      value={formData.additionalCostPrice}
                      disabled={handleDisabledOption(elm.id)}
                      onChange={(e) => {addToFormData(e, elm.id)}}
                    />
                  </td>
                  <td>

                  </td>
                  <td>
                    <button onClick={() => {
                      deleteRow(index, elm.id)
                      removeFromFormData(elm.id)
                    }}
                    >Remove
                    </button>
                  </td>
                </tr>
              </>
            )
            )}
        </tbody>
      </table>
      <button onClick={addRow}>+ Add additional costs / additional services</button>
    </>
  )
}

export default AdditionalCosts