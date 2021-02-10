import React, { useEffect, useState } from 'react';
import './Carlistings.css';
import CarCard from '../CarCard/CarCard';


function CarListings() {
    const [cars,setCars] = useState([]);
    const [loading,setloading] = useState(false)

    useEffect(async () => {
        if(cars.length == 0)
        {
            setloading(true);
            const res = await fetch('https://rocky-river-62504.herokuapp.com/cars/');
            const response = await res.json();
            setCars(response);
            setloading(false)
        }
       
    },[cars]);

    let result = null;

    if(!loading)
    {
        result = cars.map((car) => {
            return <CarCard Cardata={car} key={car._id} />
        })
    }
    return (
        <div className="carlistings-container">
            <div className="head-section-2">
                <h2>It's time to make some noise</h2>
            </div>
            <div className="filters-container">
                <h2>Choose your car right now!</h2>
                <div className="filters">
                    <div className="select-brand-container">
                        <label htmlFor="brands">Select Brand : &nbsp;</label>
                        <select id="brands" >
                            <option>None</option>
                            <option>BMW</option>
                            <option>Benz</option>
                            <option>Ford</option>
                            <option>Renault</option>
                            <option>Volkswagen</option>
                        </select>
                    </div> 
                </div>
            </div>
            <div className="ShowCars">
                {result}
            </div>
        </div>
    )
}

export default CarListings;
