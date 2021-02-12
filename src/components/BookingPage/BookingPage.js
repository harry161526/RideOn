import React, { useState } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio'
import 'react-datepicker/dist/react-datepicker.css'
import 'date-fns'
import './BookingPage.css';

function BookingPage() {
    const [firstname, SetFirstName] = useState("");
    const [lastname, SetLastName] = useState("");
    const [email, SetEmail] = useState("");
    const [mobile, SetMobile] = useState("");
    const [pickuppoint, SetPickupPoint] = useState("");
    const [droppingpoint, SetDroppingPoint] = useState("");
    const [pickupdate, SetPickupDate] = useState("");
    const [pickuptime, SetPickupTime] = useState("");
    const [droppingdate, SetDroppingDate] = useState("");
    const [droppingtime, SetDroppingTime] = useState("");
    const [driverrequired, SetDriverRequired] = useState(false);

    const handleChange = (event) => {

        SetDriverRequired(event.target.value);

    }
    return (
        <div className="booking-page">
            <form className="form-container">
                <h1>Book your Ride</h1>
                <div className="input-name-container">
                    <input type="text"
                        value={firstname}
                        placeholder="First Name"
                        onChange={(e) => SetFirstName(e.target.value)}
                        required />
                    <input type="text"
                        value={lastname}
                        placeholder="Last Name"
                        onChange={(e) => SetLastName(e.target.value)}
                        required />
                </div>
                <div className="input-email-container">
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={(e) => SetEmail(e.target.value)}
                        required />
                </div>
                <div className="input-phone-container">
                    <input
                        type="number"
                        value={mobile}
                        placeholder="Enter Mobile number"
                        onChange={(e) => SetMobile(e.target.value)}
                        required />
                </div>
                <div className="input-date-container">
                    <div>
                        <label>Pickup Date</label>
                        <input
                            type="date"
                            value={pickupdate}
                            placeholder="Pickup Date"
                            onChange={date => SetPickupDate(date.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Pickup Time</label>
                        <input
                            type="time"
                            value={pickuptime}
                            placeholder="Dropping Date"
                            onChange={date => SetPickupTime(date.target.value)}
                            required
                        />
                    </div>

                </div>
                <div className="input-date-container">
                    <div>
                        <label>Dropping Date</label>
                        <input
                            type="date"
                            value={droppingdate}
                            placeholder="Pickup Date"
                            onChange={e => SetDroppingDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Dropping Time</label>
                        <input
                            type="time"
                            value={droppingtime}
                            placeholder="Dropping Date"
                            onChange={e => SetDroppingTime(e.target.value)}
                            required
                        />
                    </div>

                </div>
                <div className="location-container">
                    <div>
                        <label>Pickup Address</label>
                        <textarea value={pickuppoint} rows="4" cols="50" onChange={e => SetPickupPoint(e.target.value)}/>
                    </div>
                    <div>
                        <label>Dropping Address</label>
                        <textarea value={droppingpoint} rows="4" cols="50" onChange={e => SetDroppingPoint(e.target.value)} />
                    </div>
                </div>
                <div className="driver-required-container">
                    <FormLabel style={{ margin: '15px 0px' }}>Do you want a driver ? (500 rupees extra per day)</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={driverrequired} onChange={(e) => handleChange(e)}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </div>
                <div className="id-proofs-container" style={{display : driverrequired == "yes" ? 'none':'flex'}}>
                    <div>
                        <label>Driving License</label>
                        <input type="file" accept="image/png, image/jpg, image/jpeg" />
                    </div>
                    <div>
                        <label>National Proof</label>
                        <input type="file" accept="image/png, image/jpg, image/jpeg" />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default BookingPage
