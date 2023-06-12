import React from 'react'
import { NavLink } from 'react-router-dom'

export const UploadSurvey = () => {
  return (
    <div style={{height:"90vh"}}>
      <div  style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"90%",flexDirection:"column"}}>
          <h1>"We're Sorry, This Page is Currently Being Updated"</h1>
      </div>
      <div
          className="buttoncontainer"
          style={{
            fontSize: "large",
            marginRight: "15px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <NavLink to="/" className="arrow_notation" >
            Back to Home
          </NavLink>
        </div>
    </div>
  )
}
