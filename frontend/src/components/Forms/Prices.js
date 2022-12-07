import React, {useEffect} from 'react'
import Select from "react-select"
import InputFields from "./InputFields"
import InputFieldsValues from "./InputFieldsValues.json"
import AlertDismissible from "./AlertDismissible"
import AdditionalCosts from "./AdditionalCosts"
import CancelationTerms from './CancelationTerms'

const Prices = ({page, setPage, formData, setFormData}) => {

  useEffect(() => {
    console.log(formData)
  });

  const alertInfo = {
    header: "You are still not sure about your price entry?",
    text: "Don't worry, you can change them later at any time in your personal landlord area. You can even set different prices for weekends, working days or discounts."
  }

  const currencyOptions = [
    { value: "euro", label: "Euro" },
    { value: "us-dollar", label: "US-Dollar" },
    { value: "pound-stirling", label: "Pound Stirling" },
    { value: "poln-zloty", label: "poln. Zloty" },
    { value: "thai-baht", label: "Thai Baht" },
    { value: "CHF", label: "CHF" },
    { value: "swedish-crowns", label: "Swedish crowns" }
  ];

  const pricesOptions = [
    { value: "per-object", label: "Per object" },
    { value: "per-person", label: "Per person" },
    { value: "per-room", label: "Per room" }
  ];

  return (
    <>
    <h1>Prices</h1>

    <h2>General information </h2>

    <label className='required'>Currency:</label>
    <Select id="currency" name="currencyType"
        options= {currencyOptions} 
        onChange={(e) => {
          setFormData({ ...formData, currencyType: e.value })
        }}
      />

    <label className='required'>Prices Are:</label>
    <Select id="prices" name="pricesType"
        options= {pricesOptions} 
        onChange={(e) => {
          setFormData({ ...formData, pricesType: e.value })
        }}
      />

    <label className='required'>Maximum Occupancy:</label>
    <input
      type="number"
      min="0" max="1000000"
      placeholder="0"
      value={formData.maximumOccupancy}
      onChange={(e) => {
        setFormData({ ...formData, maximumOccupancy: e.value })
      }}
    />

    <InputFields
      formData={formData}
      setFormData={setFormData}
      section={InputFieldsValues.pricesPageInputSections}
    />

    <h2>Season prices</h2>
    <p>If you have already defined prices for your seasonal periods, you can add them to our rental price calendar.</p>
    <AlertDismissible 
      header={alertInfo.header}
      text={alertInfo.text}
    />

    <h2>Additional costs / additional services</h2>
    <p>For a simple price presentation, it is advisable to include all additional costs as inclusive. <br/> If you want to list costs separately, please note that all fixed additional costs are automatically included in the final price.</p>
    <a target="_blank" href="/bla.pdf">Utilities calculation advisor</a>

    <h2>Cancellation terms</h2>
    <AdditionalCosts
      formData={formData}
      setFormData={setFormData}
    />

    <h2>Cancellation terms</h2>
    <CancelationTerms
      formData={formData}
      setFormData={setFormData}
    />

    <button onClick={() => { setPage(page + 1);}}> Next </button>
    <br/>
    <button onClick={() => { setPage(page - 1);}}> Previous </button>
    </>
  )
}

export default Prices