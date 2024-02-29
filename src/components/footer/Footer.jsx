import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Swasti</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/swasti-choubey/' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/swchoubey' target='_blank'><FaGithub /></a>
        <a href='https://yugen-tsuki.github.io/' target='_blank'><FaBlog /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Swasti Choubey. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer