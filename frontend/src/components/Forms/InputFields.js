import React from 'react'

const InputFields = ({ formData, setFormData, section }) => {

  const handleInputs = (e, val) => setFormData({ ...formData, [val]: e.target.value });

  return (
    <>
      {
        Object.keys(section).map((key) => (
          <div>
            <h2>{section[key].header}</h2>
              {section[key].text &&
                <p>{section[key].text}</p>
              }
            {
              section[key].inputs.map((input) => (
                <>
                  <label className={input.className}>{input.label}</label>
                  <input
                    type="number"
                    min="0" max="1000000"
                    placeholder="0"
                    value={formData[input.value]}
                    onChange={(e) => handleInputs(e, input.value)}
                  />
                </>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default InputFields