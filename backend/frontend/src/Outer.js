import React from "react";
import { Outlet } from "react-router-dom";
import { t } from "i18next";
const Outer=()=>{
    return(
        <>
          <h1 style={{ textAlign: "center" }}>{t("RAMP MSME SURVEY FORM")}</h1>
          <form id="formy">
              <Outlet />
          </form>
        </>
    )
}
export default Outer