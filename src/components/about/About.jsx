import React from 'react';
import './about.css';
import image from '../../assets/pic@2.jpg';
import { FaAward } from 'react-icons/fa';
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={image} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
          </div>
          <p>
            <b>I'm Shobiya</b>, an avid learner with a foundation in Handloom
            and Textile Technology, I've triumphantly completed the
            comprehensive (MERN) Fullstack development course facilitated by
            GUVI. This immersive learning experience has equipped me with a
            versatile skill set spanning the realms of MongoDB, Express, React,
            and Node.js, empowering me to seamlessly orchestrate end-to-end web
            solutions. My passion has evolved into the art of crafting websites
            and embracing the challenges that emerge.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
