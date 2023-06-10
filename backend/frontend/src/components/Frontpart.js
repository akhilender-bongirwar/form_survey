import React from 'react'

export default function Frontpart() {
  return (
    <div>
      <div className="menubardivbtn">
        <button className='menuicon' onClick={(e) => {
          e.preventDefault();
          const menubar = document.querySelector('.menubar');
          menubar.classList.toggle('expand');
        }} tabIndex="1" >MENU</button>
      </div>
      
      <div className="menubar">
        <button onClick={(e) => {
          e.preventDefault();
          const menubar = document.querySelector('.menubar');
          menubar.classList.toggle('expand');
        }} tabIndex="1">Close</button>
        <div className="menubarcontent">
        <button className='btns'>Homepage</button>
        <button className='btns'>Project Dashboard</button>
        </div>
      </div>

      <div className="hero">
        <img src="https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL.png" alt="" />
        <p style={{ fontWeight: "700" }}>RAMP Project</p>
        <p>RAMP Project App for Managing all Operations</p>
      </div>
      <div className="buttonclass">
        <button className='btns'>Upload Survey Documents</button>
        <button className='btns'>RAMP E-Survey Form</button>
      </div>
    </div>
  )
}
