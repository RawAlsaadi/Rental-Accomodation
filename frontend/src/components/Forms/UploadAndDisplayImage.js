import React, { useState } from "react";

const UploadAndDisplayImage = ({ formData, setFormData, selectedImage, setSelectedImage }) => {

  const [imageValue, setImageValue] = useState("");

  const handleImage = (e) => {

    // saving images in a variable (const) ensures that the new array is defined first before anything uses it (for example setImageValue & setSelectedIamge)
    const images = [...selectedImage, ...e.target.files]

    setSelectedImage(images)

    images.length === 0
      ? setImageValue("No file chosen")
      : setImageValue(images.length + " " + "files chosen")

    let files = []
    for (let i = 0; i < e.target.files.length; i++) {
      let file = e.target.files.item(i)
      files.push({ key: file })
    }

    setFormData({ ...formData, addedImages: [...formData.addedImages, ...files] })

  };

  const handleDescription = (e, index) => {
    const newArr = [...formData.addedImages]
    newArr[index].description = e.target.value

    setFormData({ ...formData, addedImages: newArr })
  }

  return (
    <>
      {
        selectedImage.map((elm, index) =>
        (
          <>
            <div>
              <img alt="not found" width={"250px"} src={URL.createObjectURL(elm)} />
              <br />
              <button onClick={() => {
                setSelectedImage([
                  ...selectedImage.slice(0, index),
                  ...selectedImage.slice(index + 1)
                ])

                setFormData({
                  ...formData, addedImages: [
                    ...formData.addedImages.slice(0, index),
                    ...formData.addedImages.slice(index + 1)]
                })
              }}
              >Remove</button>
            </div>
              <textarea
                id="description"
                name="description"
                placeholder="Enter Description"
                // value={formData.addedImages[index].description}
                onChange={(e) => handleDescription(e, index)}
              />
          </>
        ))
      }

      <br />
      <input
        type="file"
        className="hidden"
        multiple
        id="files"
        onChange={handleImage}
      />
      <span>{imageValue}</span><br />
      <label htmlFor="files">Select file</label>

    </>
  );
};

export default UploadAndDisplayImage;