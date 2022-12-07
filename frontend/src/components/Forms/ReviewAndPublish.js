import React from 'react'

const ReviewAndPublish = ({page, setPage, formData, setFormData}) => {
  return (
    <>
    <div>ReviewAndPublish</div>
    <input type="submit" value="Submit" />
    <br/>
    <button onClick={() => { setPage(page - 1);}}> Previous </button>
    </>
  )
}

export default ReviewAndPublish