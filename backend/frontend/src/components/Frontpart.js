import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Frontpart() {
  return (
    <div>
      <div className="menubardivbtn">
        <button className='menuicon arrow_notation' onClick={(e) => {
          e.preventDefault();
          const menubar = document.querySelector('.menubar');
          menubar.classList.toggle('expand');
        }} tabIndex="1" >MENU</button>
      </div>

      <div className="menubar">
        <button className='arrow_notation' onClick={(e) => {
          e.preventDefault();
          const menubar = document.querySelector('.menubar');
          menubar.classList.toggle('expand');
        }} tabIndex="1">Close</button>
        <div className="menubarcontent">
          <button className='btns'><NavLink to="/" style={{ color: "white", textDecoration: "none" }}>Home Page </NavLink></button>
          <button className='btns'>Project Dashboard</button>
        </div>
      </div>

      <div className="hero">
        <div className="imges">
          {/* <img src="/msmelogo.png" alt="" /> */}
          <div className='msme'>
            <img class="national_emblem" src="https://msme.gov.in/sites/all/themes/msme/images/emblem-dark.png" alt="national emblem" />
            <div>
              <p lang="hi">सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</p>
              <p class="maintitle1">Ministry of <br /> <strong>MICRO, SMALL &amp; MEDIUM ENTERPRISES </strong></p>
            </div>
          </div>
          <img className='iiitl' src="https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL.png" alt="" />
        </div>
      </div>
        <div className="front_heading">
          <p  style={{ fontWeight: "700", fontSize: "xx-large" }}>RAMP Project</p>
          <p>RAMP Project App for Managing all Operations</p>
        </div>
      <div className="buttonclass">
        <button className='btns'><NavLink to="/uploadSurvey" style={{ color: "white", textDecoration: "none" }}>Upload Survey Documents </NavLink></button>
        <button className='btns'><NavLink to="/eForm" style={{ color: "white", textDecoration: "none" }}>RAMP E-Survey Form </NavLink></button>
      </div>
    </div>
  )
}
