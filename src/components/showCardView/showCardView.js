import React from 'react'
import './showCardView.css';
import ImgSrc from '../../Images/examplecar.jpg'

function showCardView() {
    return (
        <div className="Card">
            <div className="imgbox">
                <img src={ImgSrc} alt="car"/>
            </div>
            <div className="content">
                <h3>brand_name</h3>
            </div>
        </div>
    )
}

export default showCardView
