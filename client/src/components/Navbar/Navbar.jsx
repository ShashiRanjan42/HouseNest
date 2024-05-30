import React, { useContext, useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useNotificationStore } from "../../lib/notificationStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const user = true;

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if(currentUser) fetch();

  return (
    <div>
      <nav>
        <div className='left'>
          <Link to={"/"} className="logo">
            <h1>H</h1>
            <h2>ouseNest</h2>
          </Link>
        </div>

        <div className="middle">
          <Link to={"/list"}>Buy</Link>
          <Link to={"/list"}>Rent</Link>
          <Link to={"/list"}>Sell</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
        </div>

        <div className='right'>
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
                {number > 0 && <div className="notification">{number}</div>}
                {/* <span>Profile</span> */}
                Profile
              </Link>
            </div>
          ) : (
            <>
              <Link to={"/login"}><button className="signIn">Sign In</button></Link>
              <Link to={"/register"}><button className="signUp">Sign Up</button></Link>
              {/* <a href="/login">Sign In</a>
              <a href="/register" className="register">Sign Up</a> */}
            </>
          
          )}

          <div className="menuIcon">
            <img 
              src='/menu.png' alt=''
              onClick={() => setOpen((prev) => !prev)}
            />

          </div>

          <div className={open ? "menu active" : "menu"}>
            <Link to={"/"}>Buy</Link>
            <Link to={"/"}>Rent</Link>
            <Link to={"/"}>Sell</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/login"} className="sign">Sign In</Link>
            <Link to={"/register"} className="signU">Sign Up</Link>
          </div>
        
        </div>
      </nav>
    </div>
  )
}


