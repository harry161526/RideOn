import React from 'react';
import {Form,Formik} from 'formik'
import * as Yup from 'yup';
import FormControl from '../../BookingPage/FormControl';
import {Link, Redirect} from 'react-router-dom';
import * as actionCreators from '../../../Redux/Actions';
import {connect} from 'react-redux';
import './signin.css';
import { CircularProgress,makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const SignIn = (props) => {
  const classes = useStyles();

  const initialValues = {
    email : '',
    password : ''
  }

  const validationSchema = Yup.object({
    email : Yup.string().email('Invalid Email').required('Required'),
    password : Yup.string().required('Required')
  })
  const onSubmit = values => {
    
    const data = {
      email : values.email,
      password : values.password
    }
    props.startLogin(data);
  }
  let body = (
    <div className={classes.root} style={{marginLeft : '50%',width : '60px',height : '60px'}}>
        <CircularProgress/>
    </div>
    )
  if(!props.loginLoading)
  {
    body = (
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {
        formik => {
          return (
            <Form className='form'>
              <h1>SignIn</h1>
              <span>{props.loginError ? props.loginError : null}</span>
              <FormControl control='input' type='email' label='Email' name='email' />
              <FormControl control='input' type='password' label='Password' name='password' />
              <div className='input-container'>
                  <button className='signup' type='submit'>Signup</button>
              </div>
              <div style={{marginTop : '10px'}}>
                  <Link to={{pathname : '/signup'}}>Don't have a account ? SignUp</Link>
              </div>
            </Form>
          )
        }
      }    
    </Formik>
    )
  }
  
  if(props.isLogged)
  {
    body = <Redirect to={{pathname : '/'}}/>
  }
  return (
    <div className="signin-container">
         {body}
    </div>
   
  );
}
const mapStateToProps = state => {
  return {
    isLogged : state.AuthenticationReducer.isLogged,
    loginLoading : state.AuthenticationReducer.loginLoading,
    loginError : state.AuthenticationReducer.loginError
  }
}
const mapDispatchToProps = dispatch => {
  return {
    startLogin : (data) => dispatch(actionCreators.login(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);