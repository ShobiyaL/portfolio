import React from "react";
import "./projects.css";
import projectImage from "../../assets/portfolio5.png"
function Projects (){
    // let projects=[{
    //     title:"",
    //     img:""
    // }]
    return(
        <section id='projects'>
         <h5>My Recent Work</h5>
         <h2>Projects</h2>
         <div className="container projects__container">
           
            <article className="projects__item">
                <div className="projects__item-image">
                  <img src={projectImage} alt="..." />
                </div>
                <h3>Equipment-Rental-App</h3>
                <div className="projects__cta">
                <a href="http://github.com" target="_blank" className="btn">Github</a>
                <a href="https://dribble.com/Alien_Pixels" target="_blank" className="btn btn-primary">Live-Demo</a>
                </div>
            </article>
            <article className="projects__item">
                <div className="projects__item-image">
                  <img src={projectImage} alt="..." />
                </div>
                <h3>Chat-App</h3>
                <div className="projects__cta">
                <a href="https://whimsical-platypus-47d221.netlify.app/" target="_blank" className="btn btn-primary">Live-Demo</a>
                <a href="https://github.com/ShobiyaL/chat-app-backend.git" target="_blank" className="btn ">Back-end</a>
                <a href="https://github.com/ShobiyaL/chat-app-client.git" target="_blank" className="btn">Front-end</a>

                </div>
            </article>
            
         </div>
        </section>
    )
}

export default Projects;
