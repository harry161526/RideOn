import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav/AdminNav';
import './Admin.css';

export class Admin extends Component {
    render() {
        return (
            <div className='container'>
                <AdminNav/>
                <div className='content-container'>

                </div>
            </div>
        )
    }
}

export default Admin
