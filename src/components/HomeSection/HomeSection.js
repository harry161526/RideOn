import react, { useState,useEffect } from 'react';
import './HomeSection.css';
import {CgChevronRight, CgOptions} from 'react-icons/cg'
import ShowCardView from '../showCardView/showCardView';
import Testimonial from '../testimonial/testimonial';
import Spinner from '@material-ui/core/CircularProgress'

const HomeSection = () => {
    const BASE_URL = 'https://rocky-river-62504.herokuapp.com/';
    const [BrandData,setBrandData] = useState([]);
    const [loading,setloading] = useState(false)

    useEffect(async () => {
            
        if(BrandData.length == 0)
        {
            setloading(true)
            const response = await fetch("https://rocky-river-62504.herokuapp.com/cars/brands/");
            const res = await response.json();
            setBrandData(res);
            setloading(false)
        } 
    
    },[BrandData]);

    let brands = <Spinner />;
    if(!loading)
    {
        console.log(BrandData)
        brands = BrandData.map(brand => {
            return <ShowCardView key={brand._id} image={BASE_URL+brand.logo} brandname={brand.brand}/>
        })
    }
   
    return(
        <div className="hero-container">
           <div className="head-section">
               <div>
                <h2>Find Right Car For Your Ride</h2>
                    <a href="#">know more <CgChevronRight style={{marginTop : '4px',marginLeft : '2px'}}/></a>
               </div>   
           </div>
           <div className="introduction">
                <h1>Choose your favourite one</h1>
                <p>We have more than 300 cars of 15+ famous brands from across the globe.you can make yourself confortable and choose the right car for your wonderful and joyful journey.
                    you can get joy of travelling in the cars of famous brands with affordale prices.
                </p>
           </div>
           <div className="showCarBrandsContainer">
            <h1>Our Popular Brands</h1>
            <div className="showCarBrands">
                {brands}
            </div>
           </div>
           <div className="testimonials_container">
                <h3>Testimonials</h3>
                <h2>What our clients say about us</h2>
                <div className="testimonials">
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                </div>
           </div>
        </div>
    )
} 

export default HomeSection;