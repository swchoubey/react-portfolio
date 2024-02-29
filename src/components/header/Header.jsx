import React, { useState } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Background from './Background'
import { PiGraphBold } from "react-icons/pi";
import { ImSwitch } from "react-icons/im";
import { FaAngleDoubleDown } from "react-icons/fa";
import ME from '../../assets/banner.png'

const Header = () => {
 
  const [showParticles, setShowParticles] = useState(false);
  const handleClick = () => {
    setShowParticles(prevState => !prevState);
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I am</h5>
        <h2>Swasti Choubey</h2>
        <h5 className='text-light'>AI-Driven Software Development | Machine Learning Expertise | Data Analytics</h5>
        <CTA />
        <HeaderSocials />
        <div className='image__wrap'>
        <div className='header__image'>
          <img src={ME} />
        </div>
        <div className='attribution'><a href="https://www.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_65309450.htm#query=female%20coder%20039&position=0&from_view=search&track=ais&uuid=e418eb61-b33c-4b94-89f4-6dd2dadee5fd">Image by catalyststuff</a> on Freepik</div>
        </div>
        <div className='features'>
          <a onClick = {handleClick}>
          {showParticles ? <ImSwitch title='Turn off'/> : <PiGraphBold title='Click to see something cool'/> }
          </a>
          {showParticles && <Background />}
          <a href='#contact' title='Scroll to Bottom'><FaAngleDoubleDown /></a>
        </div>
      </div>
    </header>
  )
}

export default Header