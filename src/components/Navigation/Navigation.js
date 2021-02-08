import React, { useState } from 'react';
import './Navigation.css';
import Modal from '../Modal/Modal';
import Aux from '../../Aux/Aux'

const Navigation  = (props) =>{
    const [sidebarOpen,setSidebar] = useState(false);

    const changeSideBar = () => {
        setSidebar(!sidebarOpen);
    }
   
    return(
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="#">
                            RideOn
                        </a>
                    </div>
                    <ul className={sidebarOpen ? 'menu active':'menu'}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Car Listing</a></li>
                        <li><a href="#">Aboutus</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    <div className='menu-btn' onClick={changeSideBar}>
                        <i className={sidebarOpen ? 'fas fa-bars active' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>
    )
}
export default Navigation;