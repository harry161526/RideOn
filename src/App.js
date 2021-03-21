import './App.css';
import React,{useEffect} from 'react'
import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux'
import HomeSection from './components/HomeSection/HomeSection';
import AboutUs from './components/AboutUs/AboutUs';
import CarListings from './components/CarListings/CarListings';
import CarFullDetails from './components/CarFullDetails/CarFullDetails';
import BookingPage from './components/BookingPage/BookingPage'
import Signin from './components/Authentications/Signin/Signin';
import Signup from './components/Authentications/Signup/Signup';
import AdminLogin from './components/Admin/AdminLogin';
import Admin from './components/Admin/Admin';
import Addcar from './components/Admin/AddCar/AddCar'
import * as actionCreators from './Redux/Actions';
import {CircularProgress} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function App(props) {
  const classes = useStyles();
  useEffect(() => {
    if(!localStorage.getItem('AccessToken'))
    {
        props.logout();
    }
    else
    {
      console.log('entered...')
      props.checkAuthStatus();
    }
   
  },[])
  
  let routes = (
    <div className={classes.root}>
        <CircularProgress />
    </div>    
  );
    if(!props.loading)
    {
      routes = (
        <div>
          <Switch>
            <Route path="/aboutus" exact component = {AboutUs} />
            <Route path="/car-listings" exact name="listings" component={CarListings} />
            <Route path="/car-listings/:id" exact component={CarFullDetails} />
            <Route path="/booking-page/:id" exact component={BookingPage} />
            <Route path="/signin" exact component={Signin} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/secret/admin' exact  component={AdminLogin} />
            <Route path='/admin' exact component={Admin} />
            <Route path="/admin/addcar" exact component={Addcar} />
            <Route path="/" exact component={HomeSection} />
          </Switch>
        </div>
      )
    }
  return (
    <BrowserRouter>
      <div className="App">
        <Layout >
          {routes}
        </Layout>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    loading : state.AuthenticationReducer.loginLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout : () => dispatch(() => actionCreators.logout()),
    checkAuthStatus : () => dispatch(actionCreators.checkAuthStatus())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
