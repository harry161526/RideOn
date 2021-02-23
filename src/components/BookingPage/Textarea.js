
import React from 'react'
import {Field,ErrorMessage} from 'formik';
import Error from './Error'

function Textarea(props) {
    const {name,label,...rest} = props
    return (
        <div className='input-container'>
            <label className='label'>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={Error} />
        </div>
    )
}

export default Textarea
