import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/wordle.jpg'
import IMG2 from '../../assets/nlp.jpg'
import IMG3 from '../../assets/ff.jpg'
import IMG4 from '../../assets/retOps.jpg'
import IMG5 from '../../assets/pix.jpg'
import IMG6 from '../../assets/bar.jpg' 

/* import IMG1 from '../../assets/portfolio/portfolio1.jpg'
import IMG2 from '../../assets/portfolio/portfolio2.jpg'
import IMG3 from '../../assets/portfolio/portfolio3.jpg'
import IMG4 from '../../assets/portfolio/portfolio4.jpg'
import IMG5 from '../../assets/portfolio/portfolio5.png'
import IMG6 from '../../assets/portfolio/portfolio6.jpg' */
import Dashboard from '../../assets/dashboard.pdf'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Wordle Clone',
    github: 'https://github.com/swchoubey/Wordle-Clone',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Twitter Sentiment Analysis',
    github: 'https://github.com/swchoubey/NLP_Disaster_Tweets_Classification',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Flatmate Finder',
    github: 'https://github.com/glear14195/flatmate-finder',
  },
  {
    id: 4,
    image: IMG4,
    title: 'RetailOps',
    github: 'https://github.com/HybridAntic/RetailProductManagementSystem',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Image Pixelator',
    github: 'https://github.com/swchoubey/Image-Pixelator',
  },
  {
    id: 6,
    image: IMG6,
    title: 'British Airways Performance Analysis',
    github: Dashboard,
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio