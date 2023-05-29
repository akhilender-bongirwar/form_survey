import React from "react";
import "./Table.css";

function FormPart5() {
  return (
    <>
      <h2 style={{ marginTop: "2em", marginBottom: "2em" }}>
        E. Grievance Redressal
      </h2>
      <div style={{ display: "flex" }}>
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
          <div className="div-style" style={{ borderTop: 0 }}>
            <label className="inner-div-tag">
              Do you avail Samadhaan service (Online dispute
              <br /> mechanism) for delayed payments{" "}
            </label>
            <div className="checkboxes">
              <div>
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
              <div>
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
    </>
  );
}

export default FormPart5;
