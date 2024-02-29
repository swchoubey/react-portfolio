import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/wordle.jpg'
import IMG2 from '../../assets/nlp.jpg'
import IMG3 from '../../assets/ff.jpg'
import IMG4 from '../../assets/retOps.jpg'
import IMG5 from '../../assets/todo.jpg'
import IMG6 from '../../assets/bar.jpg'
import Dashboard from '../../assets/dashboard.pdf'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='wordle'/>
          </div>
          <h3>Wordle Clone</h3>
          <a href='https://github.com/swchoubey/Wordle-Clone' className='btn' target='_blank'>View Source Code</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='twitter' />
          </div>
          <h3>Disaster Tweets Classification</h3>
          <a href='https://github.com/swchoubey/NLP_Disaster_Tweets_Classification' className='btn' target='_blank'>View Source Code</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='ff' />
          </div>
          <h3>Flatmate Finder</h3>
          <a href='https://github.com/glear14195/flatmate-finder' className='btn' target='_blank'>View Source Code</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='retOps' />
          </div>
          <h3>RetailOps</h3>
          <a href='https://github.com/HybridAntic/RetailProductManagementSystem' className='btn' target='_blank'>View Source Code</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='todo' />
          </div>
          <h3>ToDo List Application</h3>
          <a href='https://github.com/swchoubey/Todo-List-App' className='btn' target='_blank'>View Source Code</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='bar' />
          </div>
          <h3>Analysis of British Airlines Reviews</h3>
          <a href={Dashboard} className='btn' target='_blank'>View Dashboard</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio