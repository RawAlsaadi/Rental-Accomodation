import React, { useState, useEffect } from 'react'
import 'react-dates/initialize'
import { DayPickerSingleDateController } from 'react-dates';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Availability = ({ page, setPage, formData, setFormData}) => {

  useEffect(() => {
    console.log(formData)
  });

  const [selectedDates,  setSelectedDates] = useState([])
  const [availableDates,  setAvailableDates] = useState({})
  const [priceInput, setPriceInput] = useState()

  const highlightedDays = (day) => {
    return selectedDates.some(date => day.isSame(date), 'day')
  }

  const handleDateTypes = (e) => {
    if (e.target.innerText == "Available Dates") {
      const selectedDateMap = {}
      for (let i in selectedDates) {
        selectedDateMap[selectedDates[i]] = priceInput
      }
      const availableDatesHolder = {...availableDates, ...selectedDateMap}
      setAvailableDates(availableDatesHolder)
      setFormData({ ...formData, availableDays: availableDatesHolder})
    }

    if (e.target.innerText == "Block Dates") {
      let availableDatesWithoutSelected = {...availableDates}
      for (let i in selectedDates){
        if (selectedDates[i] in availableDatesWithoutSelected) {
          delete availableDatesWithoutSelected[selectedDates[i]]
        }
      }
      setAvailableDates(availableDatesWithoutSelected)
      setFormData({ ...formData, availableDays: availableDatesWithoutSelected})
    }

    setSelectedDates([])
  }

  const isOutsideRange = (day) => day.isBefore(moment(), 'day')

    return (
      <>
        <h1>Availability</h1>

        <DayPickerSingleDateController
          isOutsideRange={isOutsideRange}
          numberOfMonths={2}
          onDateChange={(date) =>
            selectedDates.includes(date.format('YYYY-MM-DD'))
              ? setSelectedDates([...selectedDates.filter(day => day !== date.format('YYYY-MM-DD'))])
              : setSelectedDates([...selectedDates, date.format('YYYY-MM-DD')])
          }
          isDayHighlighted={highlightedDays}
          // isDayBlocked = {highlightedDays}
          renderDayContents={(day) => {
            if (day.format('YYYY-MM-DD') in availableDates) {
              return <>{day.format('D')}<br/><span>{availableDates[day.format('YYYY-MM-DD')]}</span></>
            }
            else {
              return <div className='blockedDates'>{day.format('D')}</div>
            }
          }}
        />

        <button onClick={handleDateTypes}>Available Dates</button>
        <br />
        <button onClick={handleDateTypes}>Block Dates</button>
        <br/>
        <label className='required'>Price/day:</label>
        <input
          type="number"
          min="0" max="1000000"
          placeholder="$0"
          // value={}
          onChange={(e) => {setPriceInput(e.target.value)}}
        />
        
        <br/>

        <button onClick={() => { setPage(page + 1); }}> Next </button>
        <br />
        <button onClick={() => { setPage(page - 1); }}> Previous </button>
      </>
    )
}

export default Availability;