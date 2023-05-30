import React from "react";
import { NavLink } from "react-router-dom";
import "./Table.css";

function FormPart5({formD,setFormD}) {
  return (
    <>
      <h2 style={{ marginTop: "2em", marginBottom: "2em" }}>
        E. Grievance Redressal
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            border: "0.2em solid black",
            // width: "71vw",
            flexWrap: "wrap",
            overflowWrap: "break-word",
            borderBottom: "0",
            width: "100%",
          }}
        >
          <div
            className="div-style grevience_redressal"
            style={{ borderTop: 0, gap: "2%" }}
          >
            <label className="inner-div-tag" style={{ width: "100%" }}>
              Do you avail Samadhaan service (Online dispute mechanism) for
              delayed payments{" "}
            </label>
            <div
              className="checkboxes  grevience_redressal"
              style={{
                alignItems: "center",
                gap: "18%",
                padding: "2%",
                marginLeft: "9%",
              }}
            >
              <div style={{ display: "flex", width: "100%" }}>
                <label htmlFor="valid" style={{ fontWeight: "500" }}>
                  Yes
                </label>
                <input
                  type="radio"
                  name="availed_samadhaan_service"
                  id="valid"
                  value="YES"
                  style={{ margin: "0.5%" }}
                />
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <label htmlFor="invalid" style={{ fontWeight: "500" }}>
                  No
                </label>
                <input
                  type="radio"
                  name="availed_samadhaan_service"
                  value="NO"
                  id="invalid"
                  style={{ margin: "0.5%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/4">Prev</NavLink>
        <NavLink to="/6">Next</NavLink>
    </>
  );
}

export default FormPart5;
