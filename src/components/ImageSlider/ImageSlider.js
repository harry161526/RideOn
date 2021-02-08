import React, { useState } from 'react';
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
import './ImageSlider.css'

const ImageSlider = (props) => {
    const [current,setCurrent] = useState(0);
    const length = props.data.length;

    const onNextClick = () => {
        setCurrent(current == length-1 ? 0 : current+1);
    }
    const onPrevClick = () => {
        setCurrent(current == 0 ? length-1:current-1)
    }
    return(
            <div className="Slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={onPrevClick}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={onNextClick} />
                { props.data.map(({image,alt},index) => {
                    return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'} >
                            {index === current && (
                                <img src={image} alt={alt} className='image' />
                            )}
                        </div>
                    )
                }
                )}   
            </div>
    )
}
export default ImageSlider;