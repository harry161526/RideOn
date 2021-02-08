import react from 'react';
import './HomeSection.css';
import {CgChevronRight} from 'react-icons/cg'

const HomeSection = () => {
    return(
        <div className="hero-container">
           <div className="head-section">
               <div>
                <h2>Find Right Car For Your Ride</h2>
                    <a href="#">know more <CgChevronRight style={{marginTop : '4px',marginLeft : '2px'}}/></a>
               </div>   
           </div>
        </div>
    )
} 

export default HomeSection;