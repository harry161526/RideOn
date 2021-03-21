import React from 'react';
import Aux from '../../Aux/Aux';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Layout = props =>
{
    const matchingRoutes = ['/secret/admin','/secret/admin/','/admin','/admin/addcar']
    let container = (
        <Aux>
            <Navigation/>
            <div className="container">
               {props.children}
            </div>
            <Footer />
        </Aux>
    )
    if(matchingRoutes.includes(window.location.pathname))
    {
        container = (
            <Aux>
                <div className="conatiner">
                    {props.children}
                </div>
            </Aux>
        )
    }
    return(
        <Aux>
            {container}
        </Aux>
    )
}

export default Layout;