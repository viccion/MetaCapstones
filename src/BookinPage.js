import React, { useState } from 'react';
import {submitAPI} from './temp.js'


const Booking = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState([]);
  const [numGuests, setNumGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({ date: '', time: '', numGuests: '', occasion: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
 

const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate());
    if (Object.values(errors).every((val) => val === '')) {
        console.log("Form submitted! Date: " + date + " Time: " + time + " Number of Guests: " + numGuests + " Occasion: " + occasion);
        if(submitAPI({date:date, time:time, numGuests: numGuests, occasion: occasion})){
            alert('Reservation submitted!')
        }
    }
}








  const validate = () => {
    const tempErrors = { date: '', time: '', numGuests: '', occasion: '' };

    if (!date) {
      tempErrors.date = 'Date is required';
    }
    if (!time) {
      tempErrors.time = 'Time is required';
    }
    if (!numGuests || numGuests<1) {
      tempErrors.numGuests = 'Number of guests is required';
    }
    if (!occasion) {
      tempErrors.occasion = 'Occasion is required';
    }

    return tempErrors;
  }




  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
);

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
}

  return (
    
    
    <div className='container-sm'>
        <div className='container' style={{marginTop:'50px'}}>
<h2>Make a Reservation</h2>

        </div>
    <form onSubmit={handleSubmit} style={{marginTop:'50px', marginBottom:'100px', paddingLeft:'200px', paddingRight:'200px'}} className='border rounded'>
    <div>




    <div className="align-baseline" style={{textAlign:'left'}}>
                <label className="align-baseline" style={{marginTop:'25px', fontWeight:'bold'}} htmlFor="date">Select Date</label> <br></br></div>
                <input className="form-control" type="date" id="date" required
                value={date}
                onChange={handleDateChange}></input>
                
            </div>

            <div>
            <div className="align-baseline" style={{textAlign:'left'}}>
                <label className="align-baseline" style={{marginTop:'25px', fontWeight:'bold'}} htmlFor="time">Select Time</label> <br></br></div>
                <select className="form-control" id="time" required>

                    {finalTime}

                </select>
            </div>












        <div className="align-baseline" style={{textAlign:'left'}}>
            <label className="align-baseline" style={{marginTop:'25px', fontWeight:'bold'}}>Number of guests</label>
{errors.numGuests && <p className="error">{errors.numGuests}</p>}
<input type="number" required className="form-control" value={numGuests} min='1' onChange={(e) => setNumGuests(e.target.value)}/>
</div>




<div className="form-group-sm" style={{textAlign:'left'}}>
<label className="align-baseline" style={{marginTop:'25px', fontWeight:'bold' }}>Occasion</label>
{errors.occasion && <p className="error">{errors.occasion}</p>}
<select required className="form-control" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
<option value=""></option>    <option value="casual">Casual</option>
            <option value="business">Business</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
        </select>
    </div>
    <button className="btn btn-dark" type="submit" style={{marginTop:'50px',marginBottom:'50px'}} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit reservation'}
    </button>
  
</form>
</div>);
};

export default Booking;