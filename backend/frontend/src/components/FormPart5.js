import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Table.css";
import { useTranslation } from "react-i18next";

function FormPart5({ formD, setFormD }) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const validate = (e) => {
    const isV = document.getElementById("formy").reportValidity();
    if (!isV) {
      e.preventDefault();
    } else {
      navigate("/6");
    }
  };
  function handleChange(event) {
    const { name, value, type, checked, className } = event.target;
    if (name === "sell_produce_majorly") {
      if (type == "text") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], [value]: checked },
          };
        });
      }
    } else if (name === "service_industry") {
      if (type == "text") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], [value]: checked },
          };
        });
      }
    } else if (name === "Aware_of_listed_scehmes") {
      if (className == "central") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              Central_Govt: {
                ...prevFormData[name].Central_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              State_Govt: {
                ...prevFormData[name].State_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      }
    } else if (name === "Scheme_Like_to_avail") {
      if (className == "central") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              Central_Govt: {
                ...prevFormData[name].Central_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              State_Govt: {
                ...prevFormData[name].State_Govt,
                [value]: type === "checkbox" ? checked : value,
              },
            },
          };
        });
      }
    } else if (name === "Key_Reason_Preventing_loan") {
      if (type == "text") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], [value]: checked },
          };
        });
      }
    } else if (name === "applied_loan_outcome") {
      if (type == "radio") {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], radio_button: value, other: "" },
          };
        });
      } else {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: { ...prevFormData[name], other: value },
          };
        });
      }
    } else {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    }
  }
  return (
    <>
      <h2 style={{ marginTop: "2em", marginBottom: "2em" }}>
        {t("E. Grievance Redressal")}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // backgroundColor: "rgb(240 235 248 / 77%)",
        }}
      >
        <div
          style={{
            // border: "0.2em solid black",
            // width: "71vw",
            flexWrap: "wrap",
            overflowWrap: "break-word",
            borderBottom: "0",
            width: "100%",
            // backgroundColor: "rgb(240 235 248 / 77%)",
          }}
        >
          <div
            className="div-style grevience_redressal"
            style={{
              borderTop: 0,
              gap: "2%",
              // backgroundColor: "rgb(240 235 248 / 77%)",
            }}
          >
            <label className="inner-div-tag heading" style={{ width: "100%" }}>
              {t(
                "Do you avail Samadhaan service (Online dispute mechanism) for delayed payments"
              )}{" "}
            </label>
            <div
              className="checkboxes  grevience_redressal wrapup"
              style={{
                alignItems: "center",
                gap: "20px",
                padding: "2%",
                marginLeft: "9%",
              }}
            >
              <div style={{ display: "flex",gap:"10px", width: "100%" }}>
                <label htmlFor="valid" style={{ fontWeight: "500" }}>
                  {t("YES")}
                </label>
                <input
                  type="radio"
                  name="availed_samadhaan_service"
                  id="valid"
                  value="YES"
                  required="required"
                  onChange={handleChange}
                  checked={formD.availed_samadhaan_service == "YES"}
                  style={{ margin: "0.5%" }}
                />
              </div>
              <div style={{ display: "flex",gap:"10px", width: "100%" }}>
                <label htmlFor="invalid" style={{ fontWeight: "500" }}>
                  {t("NO")}
                </label>
                <input
                  type="radio"  
                  name="availed_samadhaan_service"
                  value="NO"
                  id="invalid"
                  required="required"
                  onChange={handleChange}
                  checked={formD.availed_samadhaan_service == "NO"}
                  style={{ margin: "0.5%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display:"flex",justifyContent:"space-between",margin:"0 15px",fontSize:"large"}}>
        <NavLink to="/eForm/4" className="arrow_notation">
          {t("Prev")}
        </NavLink>
        <NavLink to="/eForm/6" className="arrow_notation" onClick={validate}>
          {t("Next")}
        </NavLink>
      </div>
    </>
  );
}

export default FormPart5;
