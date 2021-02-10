import React, { useEffect, useState } from 'react'
import './CarFullDetails.css';

function CarFullDetails(props) {
    const [carData,changeData] = useState({});
    useEffect(() => {
        if(props.location.state)
        {
            changeData(props.location.state)
        }
        
    },[carData])
    
    console.log(carData);
    return (
        <div className="full-details">
            <p>{carData.name}</p>
        </div>
    )
}
export default CarFullDetails;



