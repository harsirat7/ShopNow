import React from 'react';
import './CSS/Footer.css';
import { Link } from 'react-router';

export default function CoreFooter() {
  return (
    <div className="footerContainer">
        <h2 className="siteNameFooter">Shop Now</h2>
        <div className="footerLinksContainer">
                
                <div className="LinksContainer">
                        <h3 className="linksMainHeading">Links</h3>
                        <ul className="linksList">
                            <li><Link className='footerLinks'>Home</Link></li>
                            <li><Link className='footerLinks'>Electronics</Link></li>
                            <li><Link className='footerLinks'>Fashion</Link></li>
                            <li><Link className='footerLinks'>Furniture</Link></li>
                            <li><Link className='footerLinks' to="/Login">Log In</Link></li>
                            <li><Link className='footerLinks'>Sign Up</Link></li>
                        </ul>
                </div>

                <div className="LinksContainer">
                    <h3 className="linksMainHeading">Follow Us</h3>
                    <ul className="linksList">
                           <li><Link className='footerLinks'><i class="bi bi-instagram"> Shop.now</i></Link></li>
                           <li><Link className='footerLinks'><i class="bi bi-twitter"> shop.now</i></Link></li>
                           <li><Link className='footerLinks'><i class="bi bi-facebook"> shop.now</i></Link></li>
                           <li><Link className='footerLinks'><i class="bi bi-youtube"></i> shop Now</Link></li>
                        </ul>
                </div>

                <div className="LinksContainer">
                    <h3 className="linksMainHeading">Contact Us</h3>
                    <ul className="linksList">
                           <li><Link className='footerLinks'><i class="bi bi-envelope"></i> shopnow@gmail.com</Link></li>
                           <li><Link className='footerLinks'><i class="bi bi-whatsapp"> +91 5263000000</i></Link></li>
                           <li><Link className='footerLinks'><i class="bi bi-telephone-fill"></i> +91 5226500000</Link></li>
                        </ul>
                </div>
        </div>
    </div>
  )
}
