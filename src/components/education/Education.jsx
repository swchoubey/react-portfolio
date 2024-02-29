import React from 'react'
import './education.css'
import { FaPenToSquare } from "react-icons/fa6";

const Education = () => {
  return (
    <section id='education'>
      <h5>What I have learned</h5>
      <h2>Education</h2>
      <div className='container education__container'>
        <article className='education'>
          <div className='education__head'>
            <h4>Master of Computer Science</h4>
            <h5>Major: Computer Science</h5>
            <h5 className='text-light'>University of California, Irvine</h5>
          </div>
          <ul className='subject__list'>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Advanced Problem Solving and Programming</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Introduction to Artificial Intelligence</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Machine Learning and Data Mining</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Parallel and Distributed Computing</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Computer and Communication Networks</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Text Processing and Pattern Matching</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Computer Systems Architecture</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Computer Security</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Algorithms</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Data Structures with Applications</p>
            </li>
          </ul>
        </article>

        <article className='education'>
          <div className='education__head'>
            <h4>Bachelor of Technology</h4>
            <h5>Major: Computer Science and Engineering</h5>
            <h5 className='text-light'>Vellore Institute of Technology, Bhopal</h5>
          </div>
          <ul className='subject__list'>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Data Structures and Algorithms</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Operating Systems</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Database Management Systems</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Software Engineering</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Internet and Web Programming</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Probability, Statistics and Reliability</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Software Project Management</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Object Oriented Programming with C++</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Design and Analysis of Algorithms</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Mobile Application Development</p>
            </li>
          </ul>
        </article>

        <article className='education'>
          <div className='education__head'>
            <h4>Online Courses and Trainings</h4>
            <h5>Technology and Business Skills</h5>
            <h5 className='text-light'>Platforms: Databricks, Coursera, Udemy, Forage, Verzeo</h5>
          </div>
          <ul className='subject__list'>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Generative AI with Google</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Generative AI Fundamentals</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Introduction to ChatGPT and Generative AI</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Making Ethical Decisions: AI Ethics</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Business Analysis: Use Cases</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Agile Job Simulation</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Software Engineering Virtual Internship</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Fundamentals of Vizualization with Tableau</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Learning Splunk</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Cloud Computing with Microsoft Azure</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Java SE8 Programming</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Machine Learning with Python</p>
            </li>
            <li>
              <FaPenToSquare className='subject__list-icon' />
              <p>Python Programming</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education