import React from 'react'
import './Founder.css';

function Founder(props) {
    return (
        <div className="founder-card">
                <div className="imgbox">
                    <img src={props.image} alt={props.alt} />
                </div>
            
            <div className="founder-info">
                <h3>{props.name}</h3>
                <h4>Founder</h4>
            </div>
        </div>
    )
}

export default Founder
