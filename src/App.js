import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomeSection from './components/HomeSection/HomeSection';
import AboutUs from './components/AboutUs/AboutUs';
import CarListings from './components/CarListings/CarListings';
import CarFullDetails from './components/CarFullDetails/CarFullDetails';
import BookingPage from './components/BookingPage/BookingPage'

function App() {
  let routes = (
    <div>
      <Switch>
        <Route path="/aboutus" exact component = {AboutUs} />
        <Route path="/car-listings" exact component={CarListings} />
        <Route path="/car-listings/:id" exact component={CarFullDetails} />
        <Route path="/booking-page/:id" exact component={BookingPage} />
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

export default App;
