import React from 'react';
import Aux from '../../Aux/Aux';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function Layout(props)
{
    return(
        <Aux>
            <Navigation/>
            <div className="container">
               {props.children}
            </div>
            <Footer />
        </Aux>
        
    )
}

export default Layout;