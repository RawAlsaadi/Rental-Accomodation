import React, { useEffect, useState } from "react";
import UploadAndDisplayImage from './UploadAndDisplayImage'

const Pictures = ({ page, setPage, formData, setFormData, selectedImage, setSelectedImage}) => {

  const [isValid, setIsValid] = useState(false);

  useEffect(() =>
    setIsValid(selectedImage.length >= 5), [selectedImage]);

  return (
    <>
      <h1>Pictures of your accommodation</h1>
      <p>
        You can change the order of the images as desired by clicking and dragging.
        Please click on the green arrow symbol in an image to define it as the preview image.
        Only images in landscape format can be selected as the start image.
        Please also remember the picture captions!
      </p>

      <UploadAndDisplayImage
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        formData={formData}
        setFormData={setFormData}
      />

      <button disabled={!isValid} onClick={() => { setPage(page + 1); }}> Next </button>
      <br />
      <button onClick={() => { setPage(page - 1); }}> Previous </button>
    </>
  )
}

export default Pictures