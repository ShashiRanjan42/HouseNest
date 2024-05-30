import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import './footer.scss';
import { AuthContext } from '../../context/AuthContext';


export default function Footer() {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-column'>
          <span className='column-title'>CONTENT</span>
          <ul className='footer-list'>
            <li>Appartment</li>
            <li>Condo</li>
            <li>House</li>
            <li>Land</li>
          </ul>
        </div>

        <div className='footer-column'>
          <span className='column-title'>INFORMATION</span>
          <ul className='footer-list'>
            <li>Contact Us</li>
            <li>About us</li>
            <li>Pricing</li>
            <li>Join us</li>
          </ul>
        </div>

        <div className='footer-column'>
          <span className='column-title'>LEGAL</span>
          <ul className='footer-list'>
            <li>Terms & Condition</li>
            <li>Privacy Policies</li>
            <li>My Wishlist</li>
            <li>Help</li>
          </ul>
        </div>

        <div className='footer-column'>
          <div className='social-title'>SOCIAL</div>
          <div className="social-buttons">
            <Link to="#"><button className='social-button'><FaFacebook /></button></Link>
            <Link to="#"><button className='social-button'><FaInstagram /></button></Link>
            <Link to="#"><button className='social-button'><FaTwitter /></button></Link>
            <Link to="#"><button className='social-button'><FaYoutube /></button></Link>
          </div>
          <div>
            <Link to={currentUser ? "/" : "/register"}><button className='signup-button'>Sign Up</button></Link>
          </div>
        </div>
      </div>
      <hr className='footer-hr'/>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          <div className='logo'>
            <h1>H</h1>
            <h2>ouseNest</h2>
          </div>
          <div className='copyright'>Copyright © 2021-2024 HouseNest Company S.R. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
