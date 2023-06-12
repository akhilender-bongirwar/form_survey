import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",flexDirection:"column"}}>
    <div>Page not found</div>
    <NavLink to="/">Go to Home Page</NavLink>
    </div>
  )
}
