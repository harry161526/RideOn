import React, { useEffect, useState } from 'react';
import './Carlistings.css';
import CarCard from '../CarCard/CarCard';
import {connect} from 'react-redux'
import * as actionCreators from '../../Redux/Actions/index';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
function CarListings(props) {
    const classes = useStyles();
   
    useEffect(async () => {
        if(props.cars.length == 0)
        {
            props.fetchCars();
        }
       
    },[]);
    console.log(props.cars);
    let result = (
        <div className={classes.root}>
            <CircularProgress />
        </div>    
    );
    if(!props.loading)
    {
        result = props.cars.map((car) => {
            return <CarCard Cardata={car} key={car._id} />
        })
    }
    

    return (
        <div className="carlistings-container">
            <div className="head-section-2">
                <h2>It's time to make some noise</h2>
            </div>
            <div className="filters-container">
                <h2>Choose your car right now!</h2>
                <div className="filters">
                    <div className="select-brand-container">
                        <label htmlFor="brands">Select Brand : &nbsp;</label>
                        <select id="brands" >
                            <option>None</option>
                            <option>BMW</option>
                            <option>Benz</option>
                            <option>Ford</option>
                            <option>Renault</option>
                            <option>Volkswagen</option>
                        </select>
                    </div> 
                </div>
            </div>
            <div className="ShowCars">
                {result}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cars : state.rootReducer.cars,
        loading : state.rootReducer.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCars : () => dispatch(actionCreators.fetchCars())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CarListings);
