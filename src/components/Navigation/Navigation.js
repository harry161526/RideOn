import React, { useState } from 'react';
import { Fragment } from 'react';
import {connect} from 'react-redux';
import './Navigation.css';


const Navigation  = (props) =>{
    const [sidebarOpen,setSidebar] = useState(false);

    const changeSideBar = () => {
        setSidebar(!sidebarOpen);
    }
   let navbar = null;
   if(!props.loading)
   {
    navbar = (
        <nav className='navbar'>
        <div className="max-width">
            <div className="logo">
                <a href="#">
                    RideOn
                </a>
            </div>
            <ul className={sidebarOpen ? 'menu active':'menu'}>
                <li><a href="/">Home</a></li>
                <li><a href="/car-listings">Car Listing</a></li>
                <li><a href="/aboutus">Aboutus</a></li>
                {props.isLogged ? <li><a href="/user/profile">Profile</a></li>:<li><a href="/signin" className='signup-btn'>Login</a></li>}
            </ul>
            <div className='menu-btn' onClick={changeSideBar}>
                <i className={sidebarOpen ? 'fas fa-bars active' : 'fas fa-bars'}></i>
            </div>
        </div>
        </nav>
    )
   }
    return(
           <>
            {navbar}
           </>
    )
}
const mapStateToProps = state => {
    return {
        isLogged : state.AuthenticationReducer.isLogged,
        loading : state.AuthenticationReducer.loginLoading
    }
}
export default connect(mapStateToProps)(Navigation);