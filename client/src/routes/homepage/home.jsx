import React, { useContext } from 'react'
import "./home.scss"
import SearchBar from "../../components/searchBar/searchBar";
import { AuthContext } from '../../context/AuthContext';
import Footer from '../../components/footer/footer';
import { TbPigMoney } from "react-icons/tb";
import { AiOutlineInsurance } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { Ri24HoursFill } from "react-icons/ri";
import { TbBusStop } from "react-icons/tb";
import { MdNaturePeople } from "react-icons/md";
import { SiTheboringcompany } from "react-icons/si";
import { SiCreativetechnology } from "react-icons/si";
import { SiLogitech } from "react-icons/si";
import { SiZebratechnologies } from "react-icons/si";
import { SiBiolink } from "react-icons/si";
import { SiNamecheap } from "react-icons/si";


export default function home() {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  
  return (
    <div className="homepage">

      <div className="container">
        <div className="left">
          <div><h1>DISCOVER </h1></div>
          <div><h1>YOUR IDEAL</h1></div>
          <div className="propertydiv">
            <h1 className="property">PROPERTY </h1>
            <div className="propertyLine"></div></div>
          <p>As soon as I had found a few properties that suited me,
             I was able to forget about how difficult it was to find the
              suitable home.
          </p>
        </div>
        <div className="right">
          <img src="./building.png" alt="" />
        </div>        
      </div>

      <div className="search">
        <SearchBar />
      </div>

      <div className='hero'>
        <div className='info'>
          <h3>Key Features</h3>
          <h1>Most Probably included best features ever</h1>
        </div>

        <div className="card">
          <div>
          <div className='imgicon' style={{ backgroundColor: '#4CCD99' }}><MdNaturePeople size={60} color='white' className='icon' /></div>
            <h2>Nature All Around You</h2>
            <p>Lorem ipsum dolor sit omet consecutive adjjoe is great place to do the done</p>
          </div>
          <div>
            <div className='imgicon' style={{ backgroundColor: '#FFBF00' }}><TbBusStop size={60} color='white' className='icon' /></div>
            <h2>Get Free Parking Place</h2>
            <p>Lorem ipsum dolor sit omet consecutive adjjoe is great place to do the done</p>
          </div>
          <div>
          <div className='imgicon' style={{ backgroundColor: '#003285' }}><Ri24HoursFill size={60} color='white' className='icon' /></div>
            <h2>24/7 Security</h2>
            <p>Lorem ipsum dolor sit omet consecutive adjjoe is great place to do the done</p>
          </div>
        </div>

      </div>

      <div className="wrapper">
        <h1>Feature Properties</h1>
        <p className='para'>Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.</p>
        <div className="right_left">
          <div className="leftImg">
            <img src="/bigbuilding.jpg" alt="" />
          </div>
          <div className="rightCard">
            <div className='card'>
              <div>
                <div className='imgicon'><TbPigMoney size={40} color='white' className='icon' /></div>
                <h2>Tax Advantage</h2>
                <p>Residences can be by and how they are connected to neighbouring and lan. types of houeng</p>
              </div>

              <div>
                <div className='imgicon' style={{ backgroundColor: 'green' }}><AiOutlineInsurance size={40} color='white' className='icon' /></div>
                <h2>Property Insurance</h2>
                <p>Residences can be by and how they are connected to neighbouring and lan. types of housing</p>
              </div>
            </div>

            <div className='card'>
              <div>
                <div className='imgicon' style={{ backgroundColor: 'rgb(38, 49, 253)' }}><GoLaw size={40} color='white' className='icon' /></div>
                <h2>Low Commission</h2>
                <p>Residences can be by and how they are connected to neighbouring and lan. types of housing</p>
              </div>
              <div>
              <div className='imgicon' style={{ backgroundColor: '#9101abf3' }}><Ri24HoursFill size={40} color='white' className='icon' /></div>
                <h2>24 Hrs Service</h2>
                <p>Residences can be by and how they are connected to neighbouring and lan. types of housing</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <div className="last">
        <h1>Trusted Over 100K+ Client</h1>
        <div>
          <SiTheboringcompany size={100} />
          <SiCreativetechnology size={120} />
          <SiLogitech size={70} />
          <SiZebratechnologies size={100} />
          <SiZebratechnologies size={100} />
          {/* <SiBiolink size={100} /> */}
          <SiNamecheap size={70} />
        </div>

      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
    
  )
}
