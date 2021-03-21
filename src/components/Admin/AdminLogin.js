import React,{Component} from 'react'
import './AdminLogin.css';
import {connect} from 'react-redux';
import * as actionCreators from '../../Redux/Actions';
import { CircularProgress } from '@material-ui/core';
import Aux from '../../Aux/Aux';
import {Formik,Form} from 'formik';
import FormControl from '../BookingPage/FormControl';
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom';

class AdminLogin extends Component {
   state = {
    loading : false
   }
   componentDidMount()
   {
       this.setState({loading : true})
        this.props.logout();
        this.setState({loading : false})
   }
   
   render()
   {
       const initialValues = {
           email : '',
           password : ''
       }
       const validateSchema = Yup.object({
           email : Yup.string().required('Required').email('Inavlid email'),
           password : Yup.string().required('Required')
       })
       const onSubmit = values => {
           const data = {
               email : values.email,
               password : values.password
           }
           this.props.login(data)
       }
       let content = <CircularProgress />
       if(!this.state.loading)
       {
            content = (
                <div className="admin-container">
                    <Formik initialValues={initialValues} 
                            validationSchema={validateSchema} 
                            onSubmit={onSubmit}>
                        <Form className='form'>
                            <h1>SignIn</h1>
                            <FormControl control='input' type='email' label='Email' name='email'/>
                            <FormControl control='input' type='password' label='Password' name='password'/>
                            <div className='input-container'>
                                <button className='signup' type='submit'>Signup</button>
                            </div>
                        </Form>        
                    </Formik>
                </div>
            )
       }
       if(this.props.isLogged && this.props.isAdmin)
       {
           content = <Redirect to={{pathname : '/admin'}} />
       }
        return(
            <Aux>
                {content}
            </Aux>
        )
   }
}
const mapsStateToProps = state => {
    return {
        isLogged : state.AuthenticationReducer.isLogged,
        isAdmin : state.AuthenticationReducer.isAdmin
    }
}
const mapsDispatchToProps = dispatch => {
    return {
        login : (data) => dispatch(actionCreators.login(data)),
        logout : () => dispatch(actionCreators.logout())
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(AdminLogin);
