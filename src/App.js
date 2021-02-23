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
import Signup from './components/Authentications/Signup/Signup'

function App(props) {

  useEffect(() => {
    
   
  })
  
  let routes = (
    <div>
      <Switch>
        <Route path="/aboutus" exact component = {AboutUs} />
        <Route path="/car-listings" exact component={CarListings} />
        <Route path="/car-listings/:id" exact component={CarFullDetails} />
        <Route path="/booking-page/:id" exact component={BookingPage} />
        <Route path="/signin" exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path="/" exact component={HomeSection} />
      </Switch>
        
    </div>
  )
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

  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkAuthStatus : () => dispatch()
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
