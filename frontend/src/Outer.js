import React from "react";
import { Outlet } from "react-router-dom";

const Outer=()=>{
    return(
        <>
          <h1 style={{ textAlign: "center" }}>DRAFT SURVEY FORM</h1>
          <Outlet />
        </>
    )
}
export default Outer