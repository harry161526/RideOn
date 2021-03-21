import react, { useState,useEffect } from 'react';
import './HomeSection.css';
import {CgChevronRight, CgOptions} from 'react-icons/cg'
import ShowCardView from '../showCardView/showCardView';
import Testimonial from '../testimonial/testimonial';
import Spinner from '@material-ui/core/CircularProgress'
import { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../Redux/Actions';

class HomeSection extends Component {
    
    state = {
        BrandData : this.props.brands,
        loading : false,
        BASE_URL : 'https://rocky-river-62504.herokuapp.com/'
    }
    componentDidMount()
    {
        if(this.state.BrandData.length == 0)
        {
            console.log("entered")
            
            this.props.fetchBrands();
            this.setState({BrandData : this.props.brands})
            console.log(this.props.brands)
        }
       
    }
    render()
    {
        let brands = <Spinner />;
        if(!this.state.loading)
        {
            
            brands = this.state.BrandData.map(brand => {
                return <ShowCardView key={brand._id} image={this.state.BASE_URL+brand.logo} brandname={brand.brand}/>
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
                 <h1>Choose your favourite one</h1>6
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
}  
const mapsStateToProps = state => {
    return {
        brands : state.rootReducer.brands
    }
}
const mapsDispatchToProps = dispatch => {
    return {
        fetchBrands : () => dispatch(actionCreators.getBrands())
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(HomeSection);