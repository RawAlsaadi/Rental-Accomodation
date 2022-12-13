import React, { useState, useEffect } from "react";
import Checkboxes from "./Checkboxes";
import CheckboxesValues from './CheckboxesValues.json'
import InputFields from "./InputFields";
import InputFieldsValues from "./InputFieldsValues.json"

const FacilitiesAndAmenities = ({ page, setPage, formData, setFormData, checkboxState, setCheckboxState }) => {

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(formData.livingSpaceInM && formData.numOfBeds), 
      [formData.livingSpaceInM, formData.numOfBeds]
      
    console.log(formData)
  });

  const previousOnClick = () => {
    setPage(page - 1)
    setFormData({ ...formData, accomodationType: "" })
    setFormData({ ...formData, country: "" })
  };

  return (
    <>
      <h1>size and amenities of accommodation</h1>
      <InputFields
        formData={formData}
        setFormData={setFormData}
        section={InputFieldsValues.facilitiesPageInputSections}
      />

      <h2>Characteristic furnishings</h2>
      <h3>Please select at least two characteristics:</h3>
      <Checkboxes
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
        formData={formData}
        setFormData={setFormData}
        checkboxElements={CheckboxesValues.characteristics.furnishings}
        type="furnishing"
      />

      <h2>suitable for:</h2>
      <Checkboxes
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
        formData={formData}
        setFormData={setFormData}
        checkboxElements={CheckboxesValues.characteristics.suitability}
        type="suitability"
      />

      <button disabled={!isValid} onClick={() => { setPage(page + 1); }}> Next </button>
      <br />
      <button onClick={previousOnClick}> Previous </button>

    </>
  )
}

export default FacilitiesAndAmenities