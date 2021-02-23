import React from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import FormControl from '../../BookingPage/FormControl';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as actionCreators from '../../../Redux/Actions/index';
import './Signup.css'

const SignUp = (props) => {
  const initialValues = {
    userName : '',
    email : '',
    password : '',
    reEnterPassword : '',
    isAdmin : false
  }
  const validateSchema = Yup.object({
      userName : Yup.string().min(6).required('Required'),
      email : Yup.string().email('Invalid Email').required('Required'),
      password : Yup.string().required('Required').matches('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$',
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
      reEnterPassword : Yup.string().required('Required').oneOf([Yup.ref('password'),null],'Password should match')

  })
  const onSubmit = values => {
      const data = {
          userName : values.userName,
          email : values.email,
          password : values.password,
          isAdmin : values.isAdmin
      }
      props.signup(JSON.stringify(data))
  }
  return (
    <div className='signup-container'>
      <Formik 
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={onSubmit}>
            {
                formik => {
                    return(
                        <>
                            <Form className='form'>
                                <h1>SignUp</h1>
                                <FormControl control='input' type='text' label='Username' name='userName'/>
                                <FormControl control='input' type='email' label='Email' name='email'/>
                                <FormControl control='input' type='password' label='Password' name='password'/>
                                <FormControl control='input' type='password' label='Confirm Password' name='reEnterPassword'/>
                                <div className='input-container'>
                                    <button className='signup' type='submit'>Signup</button>
                                </div>
                                <div>
                                    <Link to={{pathname : '/signin'}}>Have an account ? SignIn</Link>
                                </div>
                            </Form>
                        </>
                    )
                }
            }
      </Formik>  
      
    </div>
  );
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        signup : (data) => dispatch(actionCreators.signup(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
