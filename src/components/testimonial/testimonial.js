import react from 'react';
import './testimonial.css';

const Testimonial = (props) => {
    return (
        <div className="testimonial-card">
            <p>&#8222;</p>
            <div className="testimonial-text">
                <p>How does this work? Since we’ve said that .break should take up 100% of the width of the 
                    
                </p>
            </div>
            <div className="testimonial-info">
                <div className="imgbox">
                    <img src="https://www.intouchweekly.com/wp-content/uploads/2020/06/Matthew-Perry-2000.jpg?resize=1200%2C1200" 
                        alt="testimonial"/>
                </div>
                <h4>Mathew Perry</h4>
            </div>
        </div>
    )
}

export default Testimonial;