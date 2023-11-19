import React from 'react';
import './projects.css';
import digiImg from '../../assets/Blog_7-Digital-Tools_Header-Image_1920x1080.jpg';
import ecomAppimg from '../../assets/landing.jpg';
import projectImage from '../../assets/portfolio5.png';

function Projects() {
  // let projects=[{
  //     title:"",
  //     img:""
  // }]
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={digiImg} alt='...' style={{ height: '240px' }} />
          </div>
          <h3>Notes-Taking Application</h3>
          <div className='projects__cta'>
            <a
              href='https://notes-app-23cf2b.netlify.app/'
              target='_blank'
              className='btn btn-primary'
            >
              Live-Demo
            </a>
            <a
              href='https://github.com/ShobiyaL/notes-app-backend.git'
              target='_blank'
              className='btn '
            >
              Back-end
            </a>
            <a
              href='https://github.com/ShobiyaL/notes-app-backend.git'
              target='_blank'
              className='btn'
            >
              Front-end
            </a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={projectImage} alt='...' />
          </div>
          <h3>Chat-App</h3>
          <div className='projects__cta'>
            <a
              href='https://chat-client-ea37c6.netlify.app'
              target='_blank'
              className='btn btn-primary'
            >
              Live-Demo
            </a>
            <a
              href='https://github.com/ShobiyaL/chat_server.git'
              target='_blank'
              className='btn '
            >
              Back-end
            </a>
            <a
              href='https://github.com/ShobiyaL/chat_client.git'
              target='_blank'
              className='btn'
            >
              Front-end
            </a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={ecomAppimg} alt='...' style={{ height: '240px' }} />
          </div>
          <h3>ECom-App</h3>
          <div className='projects__cta'>
            <a
              href='https://e-commerce-web-app-client-8ddee5.netlify.app/'
              target='_blank'
              className='btn btn-primary'
            >
              Live-Demo
            </a>
            <a
              href='https://github.com/ShobiyaL/e-commerce-web-app-server.git'
              target='_blank'
              className='btn '
            >
              Back-end
            </a>
            <a
              href='https://github.com/ShobiyaL/e-commerce-web-app-client.git'
              target='_blank'
              className='btn'
            >
              Front-end
            </a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={projectImage} alt='...' />
          </div>
          <h3>Movie-Ticket-Booking</h3>
          <div className='projects__cta'>
            <a
              href='https://movie-ticket-booking-c2f740.netlify.app/'
              target='_blank'
              className='btn btn-primary'
            >
              Live-Demo
            </a>
            <a
              href='https://github.com/ShobiyaL/movie-ticket-app-server.git'
              target='_blank'
              className='btn '
            >
              Back-end
            </a>
            <a
              href='https://github.com/ShobiyaL/movie-ticket-app-client-2023-.git'
              target='_blank'
              className='btn'
            >
              Front-end
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
