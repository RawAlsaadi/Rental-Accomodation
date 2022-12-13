import React, {useEffect, useState} from 'react'

const CancelationTerms = ({ formData, setFormData }) => {

  useEffect(() => {
    console.log(formData)
    console.log(text)
    console.log(days)
  });

  const [text, setText] = useState("Please enter your cancellation policy here ...");
  const [disabled, setDisabled] = useState(false)
  const [days, setDays] = useState()

  const placeHolderHandler = (e) => {

    document.getElementById("cancelation-terms").value = "";

    if (e.target.innerText === "Flexible")
      setText("You will be refunded the booking amount minus the cancellation fee, if you cancel the booking at least 1 day before the planned check-in until 12 o’clock midday CET (Central European time).  For cancellations which are made less than 1 day before check-in, the booking amount minus the price for the first night and the cancellation fee will be refunded.")

    else if (e.target.innerText === "Moderate")
      setText("You will be refunded the booking amount minus the cancellation fee, if you cancel the booking at least 4 days before the planned check-in until 12 o’clock CET (Central European time). For cancellations which are made less than 4 days before check-in, you will be refunded 50% of the booking amount minus the price for the first night and the cancellation fee.")

    else if (e.target.innerText === "Strict")
      setText("You will be refunded half of the booking amount minus the cancellation fee, if you cancel the booking at least 7 days before the planned check-in until 12 o’clock midday CET (Central European time). For cancellations which are made less than 7 days before check-in there will be no refund.")
    
    setDisabled(true)
    setFormData({ ...formData, cancellationType: e.target.innerText })
  }

  return (
    <>
      <button onClick={(e) => {
        setDisabled(false)
        setText("Please enter your cancellation policy here ...")
        setFormData({ ...formData, cancellationType: e.target.innerText })
        }}> Individual </button>
      <button onClick={placeHolderHandler}> Flexible </button>
      <button onClick={placeHolderHandler}> Moderate </button>
      <button onClick={placeHolderHandler}> Strict </button>

      <div id="free-cancelation" style={{display:"none"}}>Free cancellation option until {days} days before the day of arrival.</div>
      <textarea
        id="cancelation-terms"
        name="cancelation-terms"
        placeholder= {text}
        disabled={disabled}
        onChange={(e) => setFormData({ ...formData, cancellationTerms: e.target.value })}
      />
      <br/>

      <input id="free-cancelation-days" type="checkbox" data-warning=" Please enter here the number of days before arrival up to which a free cancellation is possible."
        onChange={(e) => {
          document.getElementById("days-before-arrival").style.backgroundColor = "red"
        }}
      />
      <label for="free-cancelation-days">Free cancellation option until</label>
      
      <input
      id="days-before-arrival"
        type="number" min="1" max="90"
        value={formData.freeCancelationDays}
        onChange={(e) => {
          document.getElementById("free-cancelation").style.display = "block"
          setDays(e.target.value)
          setFormData({ ...formData, freeCancelationDays: e.target.value })
        }}
      />
      <label>days before the day of arrival.</label>

    </>
  )
}

export default CancelationTerms