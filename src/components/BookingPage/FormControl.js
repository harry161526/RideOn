import React from 'react'
import Input from './Input'
import Textarea from './Textarea';
import RadioButtons from './RadioButtons';
import CheckBoxes from './CheckBoxes';
import DatePicker from './DatePicker';

function FormControl(props) {
    const {control,...rest} = props;
   
    switch(control)
    {
        case 'input' : return <Input {...rest}/>;
        case 'textarea' : return <Textarea {...rest}/>
        case 'radio': return <RadioButtons {...rest} />
        case 'checkbox': return <CheckBoxes {...rest}/>
        case 'date': return <DatePicker {...rest} />
        default : return null;            
    }
    
}

export default FormControl
