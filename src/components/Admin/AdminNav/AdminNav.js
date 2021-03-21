import React from 'react'

import {Link} from 'react-router-dom';
import './AdminNav.css';

function AdminNav(props) {
    return (
        <div className='dashboard'>
            <div className='profile-section'>
                <div className='imgbox'>
                    <img src='https://thumbs.dreamstime.com/b/unknown-man-profile-avatar-vector-male-office-icon-potrait-175425661.jpg' 
                        alt='user_profile' />
                </div>
                <h2>Welcome Harry !</h2>
            </div>    
            <div className='options-section'>
                <ul>
                    <Link to={{pathname : '/admin/addcar'}} className='nav-link'>Add Car</Link>
                    <li className='nav-link'>Delete Car</li>
                    <li className='nav-link'>Add Brand</li>
                    <li className='nav-link'>Delete Brand</li>
                    <li className='nav-link'>Add User</li>
                    <li className='nav-link'>Delete User</li>
                    <li className='nav-link'>Logout</li>
                </ul>
            </div>
        </div>
    )
}



export default AdminNav

