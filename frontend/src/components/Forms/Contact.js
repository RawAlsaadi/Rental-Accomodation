import React from "react";
import Select from "react-select";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Contact = ({ page, setPage, formData, setFormData }) => {

  const titleOptions = [
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
    { value: "company", label: "Company" },
    { value: "family", label: "Family" },
  ];

  return (
    <>
      <h1>Contact person for guests</h1>

      <label>Company</label>
      <input
        type="text"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />

      <label>Title</label>
      <Select id="title" name="title"
        options={titleOptions}
        onChange={(e) => {
          setFormData({ ...formData, title: e.value })
        }}
      />

      <label>First name</label>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />

      <label>Surename</label>
      <input
        type="text"
        placeholder="Surename"
        value={formData.SureName}
        onChange={(e) =>
          setFormData({ ...formData, SureName: e.target.value }) 
        }
      />

      <label>Email address for holidaymaker inquiries</label>
      <input
        type="text"
        placeholder="Email"
        value={formData.emailAddresse}
        onChange={(e) =>
          setFormData({ ...formData, emailAddresse: e.target.value })
        }
      />

      <label>Telephone</label>
      <PhoneInput
        placeholder="Enter phone number"
        value={formData.phoneNumber}
        defaultCountry="CA"
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e })
        }/>


      <button onClick={() => { setPage(page + 1); }}> Next </button>
      <br />
      <button onClick={() => { setPage(page - 1); }}> Previous </button>
    </>
  )
}

export default Contact