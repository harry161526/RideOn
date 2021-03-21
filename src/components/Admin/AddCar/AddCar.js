import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Form,Formik} from 'formik';
import FormControl from '../../BookingPage/FormControl';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';
import Aux from '../../../Aux/Aux';
import AdminNav from '../AdminNav/AdminNav';
import './AddCar.css';

export class AddCar extends Component {
    state = {
        loading : false
    }
    render() {
        const initialValues = {
            name : '',
            modelName : '',
            ac : false,
            airBags : false,
            cdPlayer : false,
            powerSteering : false,
            noOfSeats : 0,
            price : 0,
            carStatus : true,
            bookCount : 0,
            image1 : '',
            image2 : '',
            image3 : '',
            expenses : 0,
            fuelProvided : 0,
            fuelType : ''
        }
        const validateSchema = Yup.object({
           name : Yup.string().min(2).max(10).required('Required'),
           modelName : Yup.string().min(2).max(10).required('Required'),
           ac : Yup.boolean(),
           cdPlayer : Yup.boolean(),
           powerSteering : Yup.string(),
           noOfSeats : Yup.number().required('required'),
           price : Yup.number().required('Required'),
           carStatus : Yup.string().required('Required'),
           bookCount : Yup.number().required('Required'),
           image1 : Yup.string().required('Required'),
           image2 : Yup.string().required('Required'),
           image3:Yup.string().required('Required'),
           expenses : Yup.number().required('Required'),
           fuelProvided : Yup.number().required('Required'),
           fuelType : Yup.string().required('Required') 
        })
        const onSubmit = values => {
          console.log(values)
        }
        let content = <CircularProgress />
        if(!this.state.loading)
        {
                content = (
                    <div className="addcar-container">
                        <Formik initialValues={initialValues} 
                                validationSchema={validateSchema} 
                                onSubmit={onSubmit}>
                            <Form className='addcar-form'>
                                <h1>Add Car</h1>
                                <FormControl control='input' type='text' label='Name' name='name'/>
                                <FormControl control='input' type='text' label='ModelName' name='modelName'/>
                                <FormControl control='checkbox'  label='CD Player' name='cdPlayer' />
                                <FormControl control='checkbox'  label='Power Steering' name='powerSteering' />
                                <FormControl control='input' type='number' label='Seat Count' name='noOfSeats' />
                                <FormControl control='input' type='number' label='Price' name='price' />
                                <FormControl control='input' type='text' label='Car Status' name='carStatus' />
                                <FormControl control='input' type='number' label='Book Count' name='bookCount' />
                                <FormControl control='input' type='file' label='Image 1' name='image1' />
                                <FormControl control='input' type='file' label='Image 2' name='image2' />
                                <FormControl control='input' type='file' label='Image 3' name='image3' />
                                <FormControl control='input' type='number' label='Expenses' name='expenses' />
                                <FormControl control='input' type='number' label='FuelProvided' name='fuelProvided' />
                                <FormControl control='input' type='text' label='Fuel Type' name='fuelType'/>
                                <div className='input-container'>
                                    <button className='signup' type='submit'>Add</button>
                                </div>
                            </Form>        
                        </Formik>
                    </div>
                )
        }
        if(this.props.isLogged && this.props.isAdmin)
        {
            content = <Redirect to={{pathname : '/admin/addcar'}} />
        }
        return (
            <Aux>
                <AdminNav />
                {content}
            </Aux>
        )
    }
}

export default AddCar
