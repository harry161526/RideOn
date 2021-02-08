import react from 'react';
import imgsrc from '../../Images/examplecar.jpg';

const CarCard = (props) => {
    return (
        <div className="Card">
            <div className="imgbox">
                
            </div>
            <div className="carinfo">
                <h3>BMW</h3>
                <p>2000 per day</p>
                <div>
                    <p>7 seats</p>
                    <p>6748 model</p>
                    <p>petrol</p>
                </div>
                <a href="#">View Details</a>
            </div>
        </div>
    )
}

export default CarCard;