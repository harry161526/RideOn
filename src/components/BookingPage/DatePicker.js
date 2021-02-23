import React from 'react'
import DateView from 'react-datepicker';
import {Field,ErrorMessage} from 'formik';
import Error from './Error';
import 'react-datepicker/dist/react-datepicker.css';



function DatePicker(props) {
    const {name,label,...rest} = props;
    return (
        <div className='input-container'>
            <label className='label'>{label}</label>
            <Field name={name}>
                {
                    ({form,field}) => {
                        const {setFieldValue} = form;
                        const {value} = field;
                        return(
                            <DateView 
                                className='input'
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                showTimeSelect
                                minDate={new Date()}
                                timeFormat="HH:mm"
                                dateFormat='dd/MM/yyyy, h:mm aa'
                                minTime={new Date().getTime()}
                                onChange={val => setFieldValue(name,val)}
                                />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={Error}/>
        </div>
    )
}

export default DatePicker
