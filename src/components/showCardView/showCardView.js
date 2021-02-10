import React from 'react'
import './showCardView.css';
import ImgSrc from '../../Images/examplecar.jpg'

function showCardView(props) {
    return (
        <div className="Card">
            <div className="imgbox">
                <img src={props.image} alt="car"/>
            </div>
            <div className="content">
                <h3>{props.brandname}</h3>
            </div>
        </div>
    )
}

export default showCardView
