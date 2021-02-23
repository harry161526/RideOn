import { ErrorMessage, Field } from 'formik';
import React, { Fragment } from 'react'
import Error from './Error'

function RadioButtons(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className='input-container'>
            <label className='label'>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map((option) => {
                            
                            return (
                                <div key={option.key} style={{display : 'flex',justifyContent : 'space-around',alignItems : 'center',minWidth : '60px',margin: '5px 0'}}>
                                    <input type='radio' id={option.key} {...field} value={option.value} checked={field.value == option.value} />
                                    <label className='label' htmlFor={option.key}>{option.value}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={Error} />
        </div>
    )
}

export default RadioButtons
