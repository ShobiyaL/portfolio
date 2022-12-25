import React from "react";
import "./skills.css";
import {BsPatchCheckFill} from "react-icons/bs"
function Skills (){
    return(
        <section id='skills'>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>

          <div className="container skills__container">
            <div className="skills__frontend">
                <h3>Frontend Development</h3>
                <div className="skills__content">
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div>
                      <h4>HTML</h4>
                      </div>
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div>
                      <h4>CSS</h4>
                      </div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div>
                      <h4>JavaScript</h4>
                      </div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div>
                      <h4>Bootstrap</h4>
                      </div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div>
                      <h4>React</h4>
                      </div>
                      
                    </article>
                </div>
                </div>
                <div className="skills__backend">
                <h3>Backend Development</h3>
                <div className="skills__content">
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div><h4>NodeJS</h4></div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div><h4>MongoDB</h4></div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div><h4>SQL</h4></div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div><h4>AWS</h4></div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div><h4>DSA</h4></div>
                      
                    </article>
                    <article className="skills__details">
                      <BsPatchCheckFill className="skills__details-icon"/>
                      <div><h4>System Design</h4></div>
                      
                    </article>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Skills;