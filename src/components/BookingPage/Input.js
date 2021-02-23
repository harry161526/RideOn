import React from 'react'
import {Field,ErrorMessage} from 'formik';
import Error from './Error';

function Input(props) {
    const {label,name,...rest} = props
    return (
        <div className="input-container">
            <label className='label' htmlFor={name}>{label}</label>
            <Field className='input'id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={Error} />
        </div>
    )
}

export default Input;
