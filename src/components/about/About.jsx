import React from 'react'
import './about.css'
import { GiDiploma } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { GiOpenFolder } from "react-icons/gi";
import Textsphere from './Textsphere';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
       {/* <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='My Image' />
          </div>
  </div>*/}
        <Textsphere />
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <GiDiploma className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>    
        
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ </small>
            </article> 
                       
            <article className='about__card'>
              <GiOpenFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>            
          </div>
          <p>
          Tech enthusiast adept in software engineering, AI solutions, and data analysis. My expertise lies in developing innovative applications infused with AI capabilities. I've spearheaded projects, from pioneering AI-driven solutions for non-invasive tumor detection to optimizing processes through machine learning algorithms.</p> 
          <p>Skilled in cross-functional collaboration, I excel in translating complex tech concepts into impactful results. Passionate about innovation and continuous learning, I aim to contribute expertise towards shaping transformative AI solutions.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About