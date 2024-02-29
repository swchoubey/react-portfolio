import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/swasti-choubey/' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/swchoubey' target='_blank'><FaGithub /></a>
        <a href='https://yugen-tsuki.github.io/' target='_blank'><FaBlog /></a>
    </div>
  )
}

export default HeaderSocials