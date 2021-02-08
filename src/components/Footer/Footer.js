import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
        <div className="footer">
            <div className="footer_content">
                 <div className="about">
                     <h3>About</h3>
                     <ul>
                         <li><a href="#">How GetHome works</a></li>
                         <li><a href="#">Newsroom</a></li>
                         <li><a href="#">Careers</a></li>
                         <li><a href="#">Blog</a></li>
                         <li><a href="#">Contactus</a></li>
                     </ul>
                 </div>
                 <div className="about">
                     <h3>About</h3>
                     <ul>
                         <li><a href="#">How GetHome works</a></li>
                         <li><a href="#">Newsroom</a></li>
                         <li><a href="#">Careers</a></li>
                         <li><a href="#">Blog</a></li>
                         <li><a href="#">Contactus</a></li>
                     </ul>
                 </div>    
            </div>
            <div className="footer_copyrights">
                 <p>&#169; 2020 GetHome, Inc. All rights reserved</p>
                 <p>| <span><a href="#">Privacy</a></span>  | <span><a href="#">Terms</a></span>  | <span><a href="#">Sitemap</a></span>  |</p>
                 <div className="social_icons">
                     <a href="#"><i className="fab fa-youtube"></i></a>
                     <a href="#"><i className="fab fa-facebook"></i></a>
                     <a href="#"><i className="fab fa-twitter"></i></a>
                     <a href="#"><i className="fab fa-instagram"></i></a>
                 </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;