import React from "react";
import "./header.css";
import CTA from './CTA';
import HeaderS from './HeaderS';
// import photo from "../../assets/mPhoto.jpg";
function Header (){
    return(
        <header>
       <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Shobiya </h1>
         <h3 className="text-light">FullStack WebDeveloper</h3>
         <CTA />
         <HeaderS />
         {/* <div className="photo">
            <img src={photo} alt="" />
         </div> */}
         {/* <div className="temp">I love to build amazing
            Websites.</div> */}
         <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>   
        </header>
    )
}

export default Header;