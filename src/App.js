import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomeSection from './components/HomeSection/HomeSection';
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  let routes = (
    <div>
      <Route path="/" exact component={HomeSection} />
      <Route path="/aboutus" component = {AboutUs} />
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
