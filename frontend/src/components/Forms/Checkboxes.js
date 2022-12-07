import React from 'react'

const Checkboxes = ({ formData, setFormData, checkboxState, setCheckboxState, checkboxElements, type }) => {

  const handleCheckbox = (e) => {

    // helps to save the state in the parent when clicking previous
    setCheckboxState({ ...checkboxState, [e.target.defaultValue]: e.target.checked });

    if (e.target.checked)
      setFormData({ ...formData, [type]: [...formData[type], e.target.defaultValue] })
    else
      setFormData({ ...formData, [type]: [...formData[type]].filter(element => element !== e.target.defaultValue) })
  };

  return (
    <>
      {
        checkboxElements.map((elm) =>
        (
          <div>
            <input
              type="checkbox"
              value={elm.value}
              checked={checkboxState[elm.value]} //taken from the parent but changed in the child
              onChange={handleCheckbox}
            />
            {elm.label}
          </div>
        ))
      }
    </>
  )
}

export default Checkboxes