import React from 'react'
import './experience.css'
import {  MdVerified } from "react-icons/md";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__programming">
          <h3>Programming Languages and Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        {/*=============================================*/}
        
        <div className="experience__data">
        <h3>Artificial Intelligence and Data</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Deep Learning</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Splunk</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Tableau</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>SQL Server</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>Azure</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < MdVerified className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience