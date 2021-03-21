import { ErrorMessage, Field } from 'formik';
import React, { Fragment } from 'react'
import Error from './Error'

function CheckBoxes(props) {
    const { label, name, ...rest } = props;
    return (
        <div className='input-container'>
            <Field name={name}>
                {
                    ({field}) => {
                        return(
                            <div>
                                <input style={{marginRight : '10px'}} type='checkbox' id='' {...field} name={name}/>
                                <label className='label'>{label}</label>
                            </div>
                        )
                    }
                }
            </Field>
           
            <ErrorMessage name={name} component={Error} />
           
        </div>
    )
}

export default CheckBoxes;
