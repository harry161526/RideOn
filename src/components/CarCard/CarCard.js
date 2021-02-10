import React from 'react'
import './CarCard.css';
import {CgChevronRight} from 'react-icons/cg';
import {Link} from 'react-router-dom';

function CarCard({Cardata}) {
    const BASE_URL = 'https://rocky-river-62504.herokuapp.com/';
    return (
        <div className="car-card">
            <div className="imgbox">
                <img src={BASE_URL+Cardata.image} alt={Cardata.name} />
            </div>
            <div className="car-info">
                <h2>{Cardata.name+" - "+Cardata.modelName}</h2>
                <p><span>&#8377;</span>{Cardata.price+" perday"}</p>
                <div className="specifications">
                    <h4>{Cardata.noOfSeats+" seater"}</h4>
                    <h4>2015 model</h4>
                    <h4>{Cardata.fuelType}</h4>
                </div>
                <Link 
                    to={
                        {pathname : '/car-listings/'+Cardata._id,
                         state : Cardata
                        }
                    }>
                    View Details <CgChevronRight style={{verticalAlign : 'middle',fontSize : '20px'}}/>
                </Link>
            </div>
        </div>
    )
}

export default CarCard
