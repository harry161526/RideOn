import React from 'react'
import './AboutUs.css';
import {FounderData} from './Foundersdata';
import Founder from '../FounderCard/Founder'

function AboutUs() {
    const founders = FounderData.map((founder,index) => {
        return <Founder key={index} name={founder.name} image={founder.image} alt={founder.alt} />
    })
    return (
        <div className="aboutus">
            <div className="head-section1">
                <h1>About Us</h1>
            </div>
            <div className="aboutus-content">
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                     essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                     versions of Lorem Ipsum.
                </p>
            </div>
            <div className="founders-container">
                <h1>Meet Our Founders</h1>
                <div className="founders">
                    {founders}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
