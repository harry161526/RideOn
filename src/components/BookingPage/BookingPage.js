import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from './FormControl';
import './BookingPage.css';

function BookingPage() {
    const radioOptions = [
        { key: 'yes', value: 'Yes' },
        { key: 'no', value: 'No' }
    ]
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        pickupDate: null,
        droppingDate: null,
        pickupAddress: '',
        driverRequired: 'Yes',
        agree: false,
        license : '',
        identity : '',
    }
    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required').min(3).max(15),
        lastName: Yup.string().required('Required').min(3),
        email: Yup.string().email('Invalid Email').required('Required'),
        mobileNumber: Yup.string().required('Required').length(10),
        pickupDate: Yup.date().required('Required'),
        droppingDate : Yup.date().required('Required'),
        pickupAddress: Yup.string().min(10).max(100).required('Required'),
        driverRequired: Yup.string().required('Required'),
        agree: Yup.boolean().required('Required'),
        license : Yup.string().when('driverRequired',{
            is : 'Yes',
            then : Yup.string(),
            otherwise : Yup.string().required('Required')
        }),
        identity : Yup.string().when('driverRequired',{
            is : 'Yes',
            then : Yup.string(),
            otherwise : Yup.string().required('Required')
        })

    })
    if(initialValues.driverRequired == 'No')
    {
        console.log('called')
        validationSchema.fields.identity = Yup.string().required('req')
        validationSchema.fields.license = Yup.string().required('req')
    }
    return (
        <div className="booking-page-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnMount
                onSubmit={onSubmit}>
                {
                    formik => {
                        return (
                            <Form className="form">
                                <FormControl control='input' type='text' label='FirstName' name='firstName' />
                                <FormControl control='input' type='text' label='LastName' name='lastName' />
                                <FormControl control='input' type='email' label='Email' name='email' />
                                <FormControl control='input' type='text' label='MobileNumber' name='mobileNumber' />
                                <div className="input-wrapper">
                                    <FormControl control='date' label='PickupDate' name='pickupDate'/>
                                    <FormControl control='date' label='droppingDate' name='droppingDate' />
                                </div>
                                <FormControl control='textarea' label='Pickup Address' name='pickupAddress' />
                                <FormControl control='radio' label='Need a driver ?' name='driverRequired' options={radioOptions} />
                                <div className='input-wrapper' style={{display : formik.values.driverRequired == 'Yes' ? 'none' : 'flex'}}>
                                    <FormControl control='input' type='file' label='Driving License' name='license' accept='image/png,image/jpg,image/jpeg'/>
                                    <FormControl control='input' type='file' label='National Identity' name='identity' accept='image/png,image/jpg,image/jpeg' />
                                </div>
                                <div className='input-container terms'>
                                    <h2>Terms and Regulations</h2>
                                    <ul>
                                        <li>{"6 liters of Basic amount of fuel will be provided"}</li>
                                        <li>3000Rs of Refundable amount should be paid to the before picking up the car.
                                            The amount will be refunded once the car is returned without any damage</li>
                                        <li>The extra money will be collected as if any major accidents occur to the car</li>
                                        <li>Extra amout of 60Rs will be collected for the every late hour after the dropping time</li>
                                        <li>Vehicle must be returned to the office if you didn't pick the driver</li>
                                        <li>vehicle must be booked before 3 hours of pickup time</li>
                                    </ul>
                                </div>
                                <FormControl control='checkbox' label='Agree to all terms and regulations' name='agree' />
                                <div className="input-container">
                                    <button className="submit-button" type="submit" disabled={!formik.isValid || !formik.values.agree}>Book</button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default BookingPage
