import React from 'react'
import NavBar from './NavBar'
import mockUp from "../images/illustration-mockups.svg"

const Hero = () => {
  return (
    <>
     <div className='Container'>
        <NavBar/>
        <div className="hero">
            <div className="content">
                <h1>Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button>Get Started For Free</button>
            </div>
            <div className="image">
            <img src={mockUp} alt="mockUp Illustration" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero