import React from 'react'
import logo from "../images/logo.svg"
import "../Style.css"

const NavBar = () => {
  return (
    <>
        <div className='navBar'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <button className='navBtn'>Try it Free</button>
        </div>
    </>
  )
}

export default NavBar