import React from 'react'
import logo from "../images/footerLogo.svg"
import location from "../images/icon-location.svg"
import phone from "../images/icon-phone.svg"
import email from "../images/icon-email.svg"
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <>
    <div className="Main_community">
       <div className="content community">
      <h1>Ready To Build Your Community?</h1>
      <button>Get Started For Free</button>
    </div>
    </div>
      <div className="footer">
        <div className="Footer_data" role="FData">
          <div className='footerLogo'>
            <img src={logo}  alt="" />
          </div>
          <div className="location">
            <img src={location} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam soluta provident libero. Incidunt, 
            sint dignissimos quidem animi, officiis cum eaque quo </p>
          </div>
          <div className="phone">
            <img src={phone} alt="" />
            <p>+1-543-123-4567</p>
          </div>
           <div className="email">
            <img src={email} alt="" />
            <p>example@huddle.com</p>
          </div>
        </div>
        <div className="footer_about" role='footerabout'>
          <p>About Us</p>
          <p>What We Do</p>
          <p>FAQ</p>
        </div>
         <div className="footer_about" role='footerabout'>
          <p>Career</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
         <div className="footer_about" role='footerabout'>
          <RiFacebookCircleLine className='icons'/>
          <TiSocialTwitterCircular className='icons'/>
          <BsInstagram className='icons'/>
        </div>
      </div>
    </>
  )
}

export default Footer