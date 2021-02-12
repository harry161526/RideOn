import React, { useEffect, useState } from 'react'
import './CarFullDetails.css';
import ImgSrc from '../../Images/examplecar.jpg'
import { Link } from 'react-router-dom';

function CarFullDetails(props) {
    const BASE_URL = "https://rocky-river-62504.herokuapp.com/";
    const [carData,changeData] = useState({});
    useEffect(() => {
        if(props.location.state)
        {
            changeData(props.location.state)
        }
        
    },[carData])
    
    console.log(carData);
    const correct = <span>&#10003;</span>;
    const wrong = <span>&#10007;</span>
    const accessories = null;
    
    return (
        <div className="full-details-container">
            <div className="full-details">
                <div className="imgbox-3">
                    <img src={BASE_URL+carData.image1} alt="car" />
                </div>
                <div className="car-info-2">
                    <h1>{carData.name+" "+carData.modelName}</h1>
                    <div className="vehicle-specifications">
                        <div className="specification">
                            <i className="fas fa-gas-pump"></i>
                            <p className="data-text">{carData.fuelType}</p>
                            <p>Fuel Type</p>
                        </div>
                        <div className="specification">
                            <i className="fas fa-user-plus"></i>
                            <p className="data-text">{carData.noOfSeats}</p>
                            <p>Seats</p>
                        </div>
                        <div className="specification">
                            <i className="fas fa-rupee-sign"></i>
                            <p className="data-text">{carData.price}</p>
                            <p>Price Per Day</p>
                        </div>
                    </div>
                </div>
                <div className="Accessories">
                    <table>
                        <caption>Accessories</caption>
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Air Conditioner</td>
                                <td className={carData.ac ? "yes" : "no"}>{carData.ac == true ? correct : wrong }</td>
                            </tr>
                            <tr>
                                <td>CD Player</td>
                                <td className={carData.cdPlayer ? "yes" : "no"}>{carData.cdPlayer == true ? correct : wrong }</td>
                            </tr>
                            <tr>
                                <td>Air Bags</td>
                                <td className={carData.airBags ? "yes" : "no"}>{carData.airBags == true ? correct : wrong }</td>
                            </tr>
                            <tr>
                                <td>Power Streering</td>
                                <td className={carData.powerSteering ? "yes" : "no"}>{carData.powerSteering == true ? correct : wrong }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               <div className="booking">
                <Link to={{
                        pathname : '/booking-page/'+carData._id,
                        state : carData
                    }} className="booking-button">Book Now</Link>
               </div>
               
            </div>   
        </div>
    )
}
export default CarFullDetails;



