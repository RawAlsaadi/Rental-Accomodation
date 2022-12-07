import React, { useState, useEffect} from "react";
import Select from "react-select";
import ReactFlagsSelect from "react-flags-select";

const Description = ({page, setPage, formData, setFormData}) => {

  const [isValid, setIsValid] = useState(false);

  const accomodationOptions = [
    { value: "holiday-home", label: "Holiday home" },
    { value: "holiday-flat", label: "Holiday flat" },
    { value: "bed-and-breakfast", label: "Bed and Breakfast" },
    { value: "castle", label: "Castle / Palace" },
    { value: "hut", label: "Hut" },
    { value: "hotel", label: "Hotel" },
    { value: "boarding-house", label: "Boarding house" },
    { value: "house-boat", label: "House boat" }
  ];

  useEffect(() => {
    setIsValid(
      formData.accomodationType && 
      formData.accomodationName &&
      formData.accomodationShortDescription &&
      formData.accomodationDetailedtDescription &&
      formData.country &&
      formData.postalCode &&
      formData.townName &&
      formData.licenceNum
    )
    console.log(formData)
  });

  const [select, setSelect] = useState("");
  const onSelect = (code) => { 
    setSelect(code)
    setFormData({ ...formData, country: code })
    console.log(code)
  };

  return (
    <>
      <h1>Description of your property</h1>

      <label className="required">Type of accommodation:</label>
      <Select id="accomodationType" name="accomodationType"
        options= {accomodationOptions} 
        onChange={(e) => {
          setFormData({ ...formData, accomodationType: e.value })
        }}
      />
      <label className="required">Name of the accommodation:</label>
      <input
        type="text"
        placeholder="Accomodation Name"
        value={formData.accomodationName} //setting the value of the form to the props value
        onChange={(e) =>
          setFormData({ ...formData, accomodationName: e.target.value })  //setting the formData to the value input of the textfield 
        }
      />
      <label className="required">Short description of the accommodation:</label>
      <input
        type="text"
        placeholder="Accomodation Short Description"
        value={formData.accomodationShortDescription}
        onChange={(e) =>
          setFormData({ ...formData, accomodationShortDescription: e.target.value }) 
        }
      />
      <label className="required">Detailed description of the accommodation:</label>
      <input
        type="text"
        placeholder="Accomodation Detailed Description"
        value={formData.accomodationDetailedtDescription}
        onChange={(e) =>
          setFormData({ ...formData, accomodationDetailedtDescription: e.target.value })
        }
      />

      <h2>Location of your property</h2>

      <label className="required">Street, house number (does not appear in the ad):</label>
      <input
        type="text"
        placeholder="Street #"
        value={formData.streetNum}
        onChange={(e) =>
          setFormData({ ...formData, streetNum: e.target.value })
        }
      />
      <label>Postal code:</label>
      <input
        type="text"
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={(e) =>
          setFormData({ ...formData, postalCode: e.target.value })
        }
      />
      <label className="required">Please enter the name of the town and select one from the list of proposals:</label>
      <input
        type="text"
        placeholder="Town Name"
        value={formData.townName}
        onChange={(e) =>
          setFormData({ ...formData, townName: e.target.value })
        }
      />
      <label className="required">Country:</label>
      <ReactFlagsSelect
        selected={select}
        onSelect={onSelect}
        countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
      />

      <div>Licence or registration number:</div>
      <div><b>What is the box for licence or registration numbers for?</b>
      <br/>
      In some cities or regions such as on the Balearic Islands landlords require a licence or registration number in order to advertise their accommodation on www.tourist-paradise.com. This box enables landlords to display such numbers directly in the respective advert <b>below the description text of the holiday property</b> to comply with local laws. Please consider that landlords do not need to register in all regions and not every landlord is legally obliged to do so.</div>
      <div>
      <input type="text"
        placeholder="Licence #"
        value={formData.licenceNum}
        onChange={(e) =>
          setFormData({ ...formData, licenceNum: e.target.value })
        }
      />
      </div>

      <button disabled={!isValid} onClick={() => { setPage(page + 1);}}>
        Next
      </button>
    </>
  )
}

export default Description