//Sz77ScQWTUZpjBx

import React, { useEffect, useState, useRef } from "react";
import {
  NavLink,
  Outlet,
  redirect,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "./Table.css";
import "../i18n.js";

import Input from "./Input";
import { Form } from "react-router-dom";
import FormPart3 from "./FormPart3";
import axios from "axios";
import FormPart2 from "./FormPart2";
import FormPart4 from "./FormPart4";

import FormPart5 from "./FormPart5";
import FormPart6 from "./FormPart6";
import { ToastContainer, toast } from "react-toastify";
import { TableRow } from "@mui/material";

function Table({ formD, setFormD }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [a1, setA1] = useState(null);
  const [a2, setA2] = useState(null);
  const [a3, setA3] = useState(null);
  const [a4, setA4] = useState(null);
  const [a5, setA5] = useState(null);
  const [a6, setA6] = useState(null);
  const [a7, setA7] = useState(null);
  const [a8, setA8] = useState(null);
  const [a9, setA9] = useState(null);
  const [an, setAn] = useState("NUMBER");

  const validate = (e) => {
    const form = document.getElementById("formy");
    const check = document.querySelectorAll(".serviceInd");
    const check1 = document.querySelector(".serviceInd");
    const manuCheck = document.querySelectorAll(".manufac");
    const manuCheck1 = document.querySelector(".manufac");
    const business = form.querySelectorAll(`input[type="checkbox"].part1`);

    var BusiChk = false;
    var chk = false;
    var chk2 = false;
    var manuchk = false;
    var manuchk1 = false;

    business.forEach((el)=>{
      if(el.checked){
        BusiChk=true;
      }
    });

    check.forEach((elem) => {
      if (elem.type == "checkbox") {
        if (elem.checked) {
          chk = true;
        }
      } else if (elem.type == "text") {
        if (elem.value != "") {
          chk2 = true;
        }
      }
    });
    manuCheck.forEach((el) => {
      if (el.type == "checkbox") {
        if (el.checked) {
          manuchk = true;
        }
      } else if (el.type == "text") {
        if (el.value != "") {
          manuchk1 = true;
        }
      }
    });
    const err1 = document.querySelector(`input[type="checkbox"].part1`);

    console.log(chk, chk2);

    if (!BusiChk) {
      toast.error("Please select any one option");
      err1.setCustomValidity("select any one option");
    }else {
      err1.setCustomValidity("");
    }

    if (!chk && !chk2) {
      toast.error("choose one of the option or fill in the text-field");
      check1.setCustomValidity("enter here or fill the text");
      check1.reportValidity();
    } else {
      check1.setCustomValidity("");
    }
    if (!manuchk && !manuchk1) {
      toast.error("Choose any one of the option or fill the text-field");
      manuCheck1.setCustomValidity("Please fill the text field");
      manuCheck1.reportValidity();
    } else {
      manuCheck1.setCustomValidity("");
    }

    const isV = document.getElementById("formy").reportValidity();
    if (!isV && (!chk || !chk2) && (!manuchk || !manuchk1)) {
      e.preventDefault();
    } else {
      navigate("/eform/2");
    }
  };

  function handleChange(event) {
    let { name, value, type, checked, className, id } = event.target;
    if (type == "number") {
      value = parseInt(value);
    }
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
    } else if (className == "Requirement_of_Soft_Interventions") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } else if (className == "Laboratory") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } else if (className == "Certifications") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } 
    else if (
      name =="Type_of_Business"
    ) {
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              [value]: checked,
            },
          };
        });
    }
    else if (className == "Infrastructure") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [className]: { ...prevFormData[className], [name]: value },
        };
      });
    } else if (name == "TOP_THREE_PRODUCTS") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: { ...prevFormData[name], [id]: value },
        };
      });
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflowY: "scroll",
          //  backgroundColor: "rgb(240 235 248 / 77%)",
        }}
      >
        <ToastContainer />
        <div
          style={{
            // width: "95vw",
            flexWrap: "wrap",
            overflowWrap: "break-word",
            borderBottom: "0",
          }}
        >
          <table style={{ width: "100%", overflowWrap: "break-word" }}>
            <thead>
              <tr>
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: "1em",
                    marginTop: "1em",
                  }}
                >
                  {t("A. MSME Specific Questionairre")}
                </h1>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="Enterprise_Name">
                    {t("Enterprise Name")}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="text"
                    id="Enterprise_Name"
                    name="Enterprise_Name"
                    value={formD.Enterprise_Name}
                    onChange={handleChange}
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="Entrepreneur_Name">
                    {t("Entrepreneur Name")}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="text"
                    id="Entrepreneur_Name"
                    name="Entrepreneur_Name"
                    value={formD.Entrepreneur_Name}
                    onChange={handleChange}
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  {t("Sex")}:
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup wrapup">
                    <div>
                      <label htmlFor="M">M</label>
                      <input
                        type="radio"
                        name="Sex"
                        id="M"
                        value="male"
                        onChange={handleChange}
                        checked={formD.Sex == "male"}
                        required="required"
                      />
                    </div>
                    <div>
                      <label htmlFor="F">F</label>
                      <input
                        type="radio"
                        name="Sex"
                        id="F"
                        value="female"
                        onChange={handleChange}
                        checked={formD.Sex == "female"}
                        required="required"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  {t("Category")}:
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="SC">SC</label>
                      <input
                        type="radio"
                        name="Category"
                        id="SC"
                        value="SC"
                        onChange={handleChange}
                        checked={formD.Category == "SC"}
                        required="required"
                      />
                    </div>
                    <div>
                      <label htmlFor="ST">ST</label>
                      <input
                        type="radio"
                        name="Category"
                        id="ST"
                        value="ST"
                        onChange={handleChange}
                        checked={formD.Category == "ST"}
                        required="required"
                      />
                    </div>
                    <div>
                      <label htmlFor="OBC">OBC</label>
                      <input
                        type="radio"
                        name="Category"
                        id="OBC"
                        value="OBC"
                        onChange={handleChange}
                        checked={formD.Category == "OBC"}
                        required="required"
                      />
                    </div>
                    <div>
                      <label htmlFor="Minority">Minority</label>
                      <input
                        type="radio"
                        name="Category"
                        id="Minority"
                        value="Minority"
                        onChange={handleChange}
                        checked={formD.Category == "Minority"}
                        required="required"
                      />
                    </div>
                    <div>
                      <label htmlFor="General">General</label>
                      <input
                        type="radio"
                        name="Category"
                        id="General"
                        value="General"
                        onChange={handleChange}
                        checked={formD.Category == "General"}
                        required="required"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="Address">{t("Address")}:</label>
                </td>
                <td colSpan={6}>
                  <input
                    type="text"
                    id="Address"
                    name="Address"
                    onChange={handleChange}
                    value={formD.Address}
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="Website">{t("Website")}:</label>
                </td>
                <td colSpan={6}>
                  <input
                    type="text"
                    id="Website"
                    name="Website"
                    onChange={handleChange}
                    value={formD.Website}
                  />
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  {t("Is your firm registerd")}?
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="Firm_Registeredyes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="Firm_Registered"
                        id="Firm_Registeredyes"
                        value="YES"
                        onChange={handleChange}
                        checked={formD.Firm_Registered == "YES"}
                        required="required"
                      />
                    </div>
                    <div>
                      <label htmlFor="Firm_Registeredno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="Firm_Registered"
                        id="Firm_Registeredno"
                        value="NO"
                        onChange={handleChange}
                        checked={formD.Firm_Registered == "NO"}
                        required="required"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  {t("Do you have Udhyog Aadhar / Udyam Registration")}{" "}
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="Udyam_Registrationyes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="Udyam_Registration"
                        id="Udyam_Registrationyes"
                        value="YES"
                        onChange={handleChange}
                        checked={formD.Udyam_Registration == "YES"}
                        required="required"
                      />
                    </div>
                    <div>
                      <label htmlFor="Udyam_Registrationno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="Udyam_Registration"
                        id="Udyam_Registrationno"
                        value="NO"
                        onChange={handleChange}
                        checked={formD.Udyam_Registration == "NO"}
                        required="required"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="UAM_UEM_Number">{t("UAM /UEM Number")}</label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="UAM_UEM_Number"
                    name="UAM_UEM_Number"
                    onChange={handleChange}
                    required="required"
                    value={formD.UAM_UEM_Number}
                  />
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="Year_of_Establishment">
                    {t("Year_of_Establishment")}:
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Year_of_Establishment"
                    name="Year_of_Establishment"
                    onChange={handleChange}
                    required="required"
                    size="4"
                    maxLength="4"
                    value={formD.Year_of_Establishment}
                  />
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  {t("Type of Business")}
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="manufacturing">
                        {t("Manufacturing")}
                      </label>
                      <input
                        type="checkbox"
                        name="Type_of_Business"
                        id="manufacturing"
                        className="part1"
                        value="manufacturing"
                        onChange={handleChange}
                        checked={formD.Type_of_Business.manufacturing}
                      />
                    </div>
                    <div>
                      <label htmlFor="service">{t("Service")}</label>
                      <input
                        type="checkbox"
                        name="Type_of_Business"
                        id="service"
                        className="part1"
                        value="service"
                        onChange={handleChange}
                        checked={formD.Type_of_Business.service}
                      />
                    </div>
                    <div>
                      <label htmlFor="trading">{t("Trading")}</label>
                      <input
                        type="checkbox"
                        name="Type_of_Business"
                        id="trading"
                        className="part1"
                        value="trading"
                        onChange={handleChange}
                        checked={formD.Type_of_Business.trading}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  {t("Whether operations are seasonal in nature")}?
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="Operations_seasonalyes">{t("YES")}</label>
                      <input
                        type="radio"
                        onClick={() => setA1("show1")}
                        name="Operations_seasonal"
                        id="Operations_seasonalyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Operations_seasonal == "YES"}
                      />
                    </div>
                    {a1 != "show1" ? (
                      ""
                    ) : (
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <td>
                          {t(
                            "In case seasonal operations, no. of months of operations in a year"
                          )}{" "}
                        </td>
                        <td>
                          <input
                            style={{ minWidth: "20px", marginBottom: "12px" }}
                            type="number"
                            id="months_of_operation"
                            name="months_of_operation"
                            onChange={handleChange}
                            min="0"
                            max="12"
                            required="required"
                            value={formD.months_of_operation}
                          />
                        </td>
                      </tr>
                    )}
                    <div>
                      <label htmlFor="Operations_seasonalno">{t("NO")}</label>
                      <input
                        type="radio"
                        onClick={() => setA1(null)}
                        name="Operations_seasonal"
                        id="Operations_seasonalno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Operations_seasonal == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  {t("Ownership Pattern")}
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup" id="ownership_pattern">
                    <div>
                      <label htmlFor="proprietary">{t("Proprietary")}</label>
                      <input
                        type="radio"
                        name="Ownership_Pattern"
                        onClick={() => setA2(null)}
                        id="proprietary"
                        value="proprietary"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Ownership_Pattern == "proprietary"}
                      />
                    </div>
                    <div>
                      <label htmlFor="partnership">{t("Partnership")}</label>
                      <input
                        type="radio"
                        onClick={() => setA2("show2")}
                        name="Ownership_Pattern"
                        id="partnership"
                        value="partnership"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Ownership_Pattern == "partnership"}
                      />
                    </div>
                    <div>
                      <label htmlFor="private">{t("Private")}</label>
                      <input
                        type="radio"
                        onClick={() => setA2(null)}
                        name="Ownership_Pattern"
                        id="private"
                        value="private"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Ownership_Pattern == "private"}
                      />
                    </div>
                    <div>
                      <label htmlFor="LLP">{t("LLP")}</label>
                      <input
                        type="radio"
                        onClick={() => setA2(null)}
                        name="Ownership_Pattern"
                        id="LLP"
                        required="required"
                        value="LLP"
                        onChange={handleChange}
                        checked={formD.Ownership_Pattern == "LLP"}
                      />
                    </div>
                    <div>
                      <label htmlFor="PUBLIC">{t("Public")}</label>
                      <input
                        type="radio"
                        onClick={() => setA2(null)}
                        name="Ownership_Pattern"
                        id="PUBLIC"
                        value="PUBLIC"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Ownership_Pattern == "PUBLIC"}
                      />
                    </div>
                    <div>
                      <label htmlFor="NO LEGAL ENTITY">
                        {t("No Legal Entity")}
                      </label>
                      <input
                        type="radio"
                        onClick={() => setA2(null)}
                        name="Ownership_Pattern"
                        id="NO LEGAL ENTITY"
                        value="NO LEGAL ENTITY"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Ownership_Pattern == "NO LEGAL ENTITY"}
                      />
                    </div>
                  </div>
                  {a2 != "show2" ? (
                    ""
                  ) : (
                    <tr
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <td>{t("If Yes, % ownership of female")} </td>
                      <td>
                        <input
                          style={{ minWidth: "20px" }}
                          type="number"
                          id="ownership_female_partnership"
                          name="ownership_female_partnership"
                          min="0"
                          max="100"
                          required="required"
                          onChange={handleChange}
                          value={formD.ownership_female_partnership}
                        />
                      </td>
                    </tr>
                  )}
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <>{t("Are you a part of any Cluster")}? </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="Clusteryes">{t("YES")}</label>
                      <input
                        type="radio"
                        onClick={() => setA3("Yes")}
                        name="Cluster"
                        id="Clusteryes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Cluster == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="Clusterno">{t("NO")}</label>
                      <input
                        type="radio"
                        onClick={() => setA3("No")}
                        name="Cluster"
                        id="Clusterno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Cluster == "NO"}
                      />
                    </div>
                  </div>
                  {a3 == "Yes" ? (
                    <tr
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <td>
                        {t("If Yes, which one? How many units are there")}
                      </td>
                      <td>
                        <input
                          style={{ minWidth: "20px" }}
                          type="text"
                          id="Cluster_Yes"
                          name="Cluster_Yes"
                          required="required"
                          onChange={handleChange}
                          value={formD.Cluster_Yes}
                        />
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                  {a3 == "No" ? (
                    <tr
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <td>{t("If No, Why")}?</td>
                      <td>
                        <input
                          style={{ minWidth: "20px", marginBottom: "12px" }}
                          type="text"
                          id="Cluster_No"
                          name="Cluster_No"
                          required="required"
                          onChange={handleChange}
                          value={formD.Cluster_No}
                        />
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <>
                    {" "}
                    {t(
                      "Do you use computer software for accounting or managing finances"
                    )}
                    ?
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="use_computeryes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="use_computer"
                        id="use_computeryes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.use_computer == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="use_computerno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="use_computer"
                        id="use_computerno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.use_computer == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <>{t("What are the top 3 products you offer")}? </>
                </td>
                <td
                  className="input_label_gapper"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                  colSpan={6}
                >
                  <td>
                    <label htmlFor="TOP_THREE_PRODUCTS_1">1. </label>
                    <input
                      style={{ width: "95%" }}
                      type="text"
                      id="TOP_THREE_PRODUCTS_1"
                      name="TOP_THREE_PRODUCTS"
                      value={formD.TOP_THREE_PRODUCTS.TOP_THREE_PRODUCTS_1}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="TOP_THREE_PRODUCTS_2">2. </label>
                    <input
                      style={{ width: "95%" }}
                      type="text"
                      id="TOP_THREE_PRODUCTS_2"
                      name="TOP_THREE_PRODUCTS"
                      value={formD.TOP_THREE_PRODUCTS.TOP_THREE_PRODUCTS_2}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="TOP_THREE_PRODUCTS_3">{"3.   "}</label>
                    <input
                      style={{ width: "95%" }}
                      type="text"
                      id="TOP_THREE_PRODUCTS_3"
                      name="TOP_THREE_PRODUCTS"
                      value={formD.TOP_THREE_PRODUCTS.TOP_THREE_PRODUCTS_3}
                      onChange={handleChange}
                    />
                  </td>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <>
                    {" "}
                    {t(
                      "For Manufacturing :- Where all do you sell your produce/products majorly?  Please tick (✓) all the relevant options"
                    )}{" "}
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup" id="ownership_pattern">
                    <div>
                      <label htmlFor="local">{t("Local Market/ trader")}</label>
                      <input
                        type="checkbox"
                        name="sell_produce_majorly"
                        id="local"
                        className="manufac"
                        value="Local_Market"
                        checked={formD.sell_produce_majorly.Local_Market}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="Govt">
                        {t("Government (State/Central)")}
                      </label>
                      <input
                        type="checkbox"
                        id="Govt"
                        name="sell_produce_majorly"
                        value="Government"
                        className="manufac"
                        checked={formD.sell_produce_majorly.Government}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="online">{t("Online Platform")}</label>
                      <input
                        type="checkbox"
                        id="online"
                        name="sell_produce_majorly"
                        value="online"
                        className="manufac"
                        checked={formD.sell_produce_majorly.online}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="other">
                        {t("Other states in India")}{" "}
                      </label>
                      <input
                        type="checkbox"
                        id="other"
                        name="sell_produce_majorly"
                        value="Other_states"
                        className="manufac"
                        checked={formD.sell_produce_majorly.Other_states}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="export">
                        {t("Export outside India")}
                      </label>
                      <input
                        type="checkbox"
                        id="export"
                        name="sell_produce_majorly"
                        value="export_outside"
                        className="manufac"
                        checked={formD.sell_produce_majorly.export_outside}
                        onChange={handleChange}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        gap: "15px",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                      }}
                    >
                      <label htmlFor="others">
                        {t("Other please specify")}
                      </label>
                      <td>
                        <input
                          type="text"
                          id="others"
                          name="sell_produce_majorly"
                          className="manufac"
                          onChange={handleChange}
                          value={formD.sell_produce_majorly.other}
                          style={{ width: "85%" }}
                        />
                      </td>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <>
                    {" "}
                    {t(
                      "In case of Service Industry, your services are offered to"
                    )}{" "}
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup" id="ownership_pattern">
                    <div>
                      <label htmlFor="local1">
                        {t("Local Market/ trader")}
                      </label>
                      <input
                        type="checkbox"
                        name="service_industry"
                        id="local1"
                        value="Local_Market"
                        checked={formD.service_industry.Local_Market}
                        onChange={handleChange}
                        className="serviceInd"
                      />
                    </div>

                    <div>
                      <label htmlFor="Govt1">
                        {t("Government (State/Central)")}
                      </label>
                      <input
                        type="checkbox"
                        id="Govt1"
                        name="service_industry"
                        value="Government"
                        checked={formD.service_industry.Government}
                        onChange={handleChange}
                        className="serviceInd"
                      />
                    </div>

                    <div>
                      <label htmlFor="online1">{t("Online Platform")}</label>
                      <input
                        type="checkbox"
                        id="online1"
                        name="service_industry"
                        value="online"
                        checked={formD.service_industry.online}
                        onChange={handleChange}
                        className="serviceInd"
                      />
                    </div>

                    <div>
                      <label htmlFor="other1">
                        {t("Other states in India")}
                      </label>
                      <input
                        type="checkbox"
                        id="other1"
                        name="service_industry"
                        value="Other_states"
                        checked={formD.service_industry.Other_states}
                        onChange={handleChange}
                        className="serviceInd"
                      />
                    </div>
                    <div>
                      <label htmlFor="export1">{t("Internationally")}</label>
                      <input
                        type="checkbox"
                        id="export1"
                        name="service_industry"
                        value="internationally"
                        checked={formD.service_industry.internationally}
                        onChange={handleChange}
                        className="serviceInd"
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        gap: "15px",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                      }}
                    >
                      <label htmlFor="others1">
                        {t("Other please specify")}
                      </label>
                      <td>
                        <input
                          type="text"
                          id="others1"
                          name="service_industry"
                          onChange={handleChange}
                          value={formD.service_industry.other}
                          style={{ width: "85%" }}
                          className="serviceInd"
                        />
                      </td>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <>{t("No of Employees ( or % )")}</>
                  <tr style={{ display: "table-caption" }}>
                    <td>
                      <label htmlFor="employee_unityes">{t("Number")}</label>
                      <input
                        type="radio"
                        onClick={() => setAn("NUMBER")}
                        name="employee_unit"
                        id="employee_unityes"
                        value="NUMBER"
                        required="required"
                        onChange={handleChange}
                        checked={formD.employee_unit == "NUMBER"}
                      />
                    </td>
                    <td>
                      <label htmlFor="employee_unitno">{t("Percentage")}</label>
                      <input
                        type="radio"
                        onClick={() => setAn("Percentage")}
                        name="employee_unit"
                        id="employee_unitno"
                        value="Percentage"
                        required="required"
                        onChange={handleChange}
                        checked={formD.employee_unit == "Percentage"}
                      />
                    </td>
                  </tr>
                </td>
                {an == "Percentage" ? (
                  <div className="wrapup">
                    <td
                      className="input_label_gapper"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                      colSpan={6}
                    >
                      <div>
                        <label htmlFor="full_time_Emoployee-1">
                          {t("Full time")}:{" "}
                        </label>
                        <td>
                          <input
                            style={{ width: "95%" }}
                            type="number"
                            id="full_time_Emoployee-1"
                            name="full_time_Emoployee"
                            required="required"
                            min="0"
                            max="100"
                            onChange={handleChange}
                            value={formD.full_time_Emoployee}
                          />
                        </td>
                      </div>
                      <div>
                        <label htmlFor="part_time_Emoployee-2">
                          {t("Part time")}:{" "}
                        </label>
                        <td>
                          <input
                            style={{ width: "95%" }}
                            type="number"
                            id="part_time_Emoployee-2"
                            name="part_time_Emoployee"
                            required="required"
                            min="0"
                            max="100"
                            onChange={handleChange}
                            value={formD.part_time_Emoployee}
                          />
                        </td>
                      </div>
                    </td>
                    <td
                      className="input_label_gapper"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                      colSpan={6}
                    >
                      <div>
                        <label htmlFor="Permanent_Emoployee-1">
                          {t("Permanent")}:{" "}
                        </label>
                        <td>
                          <input
                            style={{ width: "95%" }}
                            type="number"
                            id="Permanent_Emoployee-1"
                            name="Permanent_Emoployee"
                            required="required"
                            min="0"
                            max="100"
                            onChange={handleChange}
                            value={formD.Permanent_Emoployee}
                          />
                        </td>
                      </div>
                      <div>
                        <label htmlFor="Contractual_Emoployee-2">
                          {t("Contractual")}:{" "}
                        </label>
                        <td>
                          <input
                            style={{ width: "95%" }}
                            type="number"
                            id="Contractual_Emoployee-2"
                            name="Contractual_Emoployee"
                            required="required"
                            min="0"
                            max="100"
                            onChange={handleChange}
                            value={formD.Contractual_Emoployee}
                          />
                        </td>
                      </div>
                    </td>
                    <td
                      className="input_label_gapper"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                      colSpan={6}
                    >
                      <div>
                        <label htmlFor="male_employee-1">{t("Male")}: </label>
                        <td>
                          <input
                            style={{ width: "95%" }}
                            type="number"
                            id="male_employee-1"
                            name="male_employee"
                            required="required"
                            min="0"
                            max="100"
                            onChange={handleChange}
                            value={formD.male_employee}
                          />
                        </td>
                      </div>
                      <div>
                        <label htmlFor="female_employee-2">
                          {t("Female")}:{" "}
                        </label>
                        <td>
                          <input
                            style={{ width: "95%" }}
                            type="number"
                            id="female_employee-2"
                            required="required"
                            min="0"
                            max="100"
                            name="female_employee"
                            onChange={handleChange}
                            value={formD.female_employee}
                          />
                        </td>
                      </div>
                    </td>
                  </div>
                ) : (
                  <div className="wrapup">
                    <td
                      className="input_label_gapper"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: "10px",
                      }}
                      colSpan={6}
                    >
                      <div>
                        <label
                          style={{ whiteSpace: "nowrap" }}
                          htmlFor="full_time_Emoployee-1"
                        >
                          {t("Full time")}:{" "}
                        </label>
                        <input
                          // style={{ width: "20%" }}
                          type="number"
                          id="full_time_Emoployee-1"
                          name="full_time_Emoployee"
                          required="required"
                          onChange={handleChange}
                          value={formD.full_time_Emoployee}
                        />
                      </div>
                      <div>
                        <label
                          style={{ whiteSpace: "nowrap" }}
                          htmlFor="part_time_Emoployee-2"
                        >
                          {t("Part time")}:{" "}
                        </label>
                        <input
                          // style={{ width: "20%" }}
                          type="number"
                          id="part_time_Emoployee-2"
                          name="part_time_Emoployee"
                          required="required"
                          onChange={handleChange}
                          value={formD.part_time_Emoployee}
                        />
                      </div>
                    </td>
                    <td
                      className="input_label_gapper"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: "10px",
                      }}
                      colSpan={6}
                    >
                      <div>
                        <label htmlFor="Permanent_Emoployee-1">
                          {t("Permanent")}:{" "}
                        </label>
                        <input
                          // style={{ width: "20%" }}
                          type="number"
                          id="Permanent_Emoployee-1"
                          name="Permanent_Emoployee"
                          required="required"
                          onChange={handleChange}
                          value={formD.Permanent_Emoployee}
                        />
                      </div>
                      <div>
                        <label htmlFor="Contractual_Emoployee-2">
                          {t("Contractual")}:{" "}
                        </label>
                        <input
                          // style={{ width: "20%" }}
                          type="number"
                          id="Contractual_Emoployee-2"
                          name="Contractual_Emoployee"
                          required="required"
                          onChange={handleChange}
                          value={formD.Contractual_Emoployee}
                        />
                      </div>
                    </td>
                    <td
                      className="input_label_gapper"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: "10px",
                      }}
                      colSpan={6}
                    >
                      <div>
                        <label htmlFor="male_employee-1">{t("Male")}: </label>
                        <input
                          // style={{ width: "20%" }}
                          type="number"
                          id="male_employee-1"
                          name="male_employee"
                          required="required"
                          onChange={handleChange}
                          value={formD.male_employee}
                        />
                      </div>
                      <div>
                        <label htmlFor="female_employee-2">
                          {t("Female")}:{" "}
                        </label>
                        <input
                          // style={{ width: "20%" }}
                          type="number"
                          id="female_employee-2"
                          required="required"
                          name="female_employee"
                          onChange={handleChange}
                          value={formD.female_employee}
                        />
                      </div>
                    </td>
                  </div>
                )}
              </tr>
              <tr>
                <td className="heading" colSpan={1}>
                  <>{t("Major Source of your Financing (or %)")} </>
                </td>
                <div className="wrapup">
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="formal_source-1">
                        {t("Formal Sources(Bank/NBFCs etc)")}:{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="number"
                        id="formal_source-1"
                        name="formal_source"
                        onChange={handleChange}
                        value={formD.formal_source}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="informal_source-1">
                        {t("Informal Sources(friends/relatives//money lenders)")}:{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="number"
                        id="informal_source-1"
                        name="informal_source"
                        onChange={handleChange}
                        value={formD.informal_source}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="internal_fund_generation-1">
                        {t("Internal fund generation/Own sources")}:{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="number"
                        id="internal_fund_generation-1"
                        name="internal_fund_generation"
                        onChange={handleChange}
                        value={formD.internal_fund_generation}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="other_financing_source-1">
                        {t("Other please specify")}{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="other_financing_source-1"
                        name="other_financing_source"
                        onChange={handleChange}
                        value={formD.other_financing_source}
                      />
                    </div>
                  </td>
                </div>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>{t("Whether loan availed")} </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="loan_availedyes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="loan_availed"
                        id="loan_availedyes"
                        value="YES"
                        required="required"
                        onClick={() => setA7("show7")}
                        onChange={handleChange}
                        checked={formD.loan_availed == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="loan_availedno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="loan_availed"
                        id="loan_availedno"
                        value="NO"
                        onClick={() => setA7(null)}
                        required="required"
                        onChange={handleChange}
                        checked={formD.loan_availed == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              {a7 != "show7" ? (
                ""
              ) : (
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="loan_specification">
                      {t("Please specify, Term Loan / Working Capital / Both")}{" "}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="loan_specification"
                      name="loan_specification"
                      required="required"
                      onChange={handleChange}
                      value={formD.loan_specification}
                    />
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan={1}>
                  <>{t("Whether Loan is adequate for your operations")}?</>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="loan_adequateyes">{t("YES")}</label>
                      <input
                        type="radio"
                        onClick={() => setA4(null)}
                        name="loan_adequate"
                        id="loan_adequateyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.loan_adequate == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="loan_adequateno">{t("NO")}</label>
                      <input
                        type="radio"
                        onClick={() => setA4("show4")}
                        name="loan_adequate"
                        id="loan_adequateno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.loan_adequate == "NO"}
                      />
                    </div>
                  </div>
                  {a4 != "show4" ? (
                    ""
                  ) : (
                    <tr
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <td>
                        {t(
                          "If not, please indicate the amount of loan required for both term loan and working capital loan"
                        )}{" "}
                      </td>
                      <td><input
                        style={{ minWidth: "20px", marginBottom: "12px" }}
                        type="number"
                        id="loan_required"
                        name="loan_required"
                        // required="required"
                        onChange={handleChange}
                        value={formD.loan_required}
                      />
                      </td>
                    </tr>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>
                    {t(
                      "Did you avail any credit facility in the last 12 months"
                    )}
                    ?{" "}
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="availed_loan_last_yearyes">
                        {t("YES")}
                      </label>
                      <input
                        type="radio"
                        onClick={() => setA5("show5")}
                        name="availed_loan_last_year"
                        id="availed_loan_last_yearyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.availed_loan_last_year == "YES"}
                      />
                    </div>

                    <div>
                      <label htmlFor="availed_loan_last_yearno">
                        {t("NO")}
                      </label>
                      <input
                        type="radio"
                        onClick={() => setA5(null)}
                        name="availed_loan_last_year"
                        id="availed_loan_last_yearno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.availed_loan_last_year == "NO"}
                      />
                    </div>
                  </div>
                  {a5 != "show5" ? (
                    ""
                  ) : (
                    <tr
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <td>{t("If Yes, then amount and bank/lender")} </td>
                      <td>
                        <input
                          style={{ minWidth: "20px", marginBottom: "12px" }}
                          type="text"
                          id="availed_loan_amount"
                          name="availed_loan_amount"
                          required="required"
                          onChange={handleChange}
                          value={formD.availed_loan_amount}
                        />
                      </td>
                    </tr>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>
                    {" "}
                    {t(
                      "Any innovation or R&D undertaken on your own or in collaboration/support from some institute"
                    )}
                    ?{" "}
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="innovation_RDyes">{t("YES")}</label>
                      <input
                        type="radio"
                        onClick={() => setA6("show6")}
                        name="innovation_RD"
                        id="innovation_RDyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.innovation_RD == "YES"}
                      />
                    </div>

                    <div>
                      <label htmlFor="innovation_RDno">{t("NO")}</label>
                      <input
                        type="radio"
                        onClick={() => setA6(null)}
                        name="innovation_RD"
                        id="innovation_RDno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.innovation_RD == "NO"}
                      />
                    </div>
                  </div>
                  {a6 != "show6" ? (
                    ""
                  ) : (
                    <tr
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <td>{t("If yes, which one")}? </td>
                      <td>
                        <input
                          style={{ minWidth: "20px", marginBottom: "12px" }}
                          type="text"
                          id="innovation_RD_institute"
                          name="innovation_RD_institute"
                          required="required"
                          onChange={handleChange}
                          value={formD.innovation_RD_institute}
                        />
                      </td>
                    </tr>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>
                    {t("Have you taken any support from Govt agency / scheme")}{" "}
                  </>
                </td>
                <td>
                  <tr style={{ display: "flex" }} colSpan={6}>
                    <div className="radio_wrapper wrapup">
                      <div>
                        <label htmlFor="support_from_agencyyes">
                          {t("YES")}
                        </label>
                        <input
                          type="radio"
                          name="support_from_agency"
                          id="support_from_agencyyes"
                          onClick={() => {
                            setA8("show8");
                          }}
                          value="YES"
                          required="required"
                          onChange={handleChange}
                          checked={formD.support_from_agency == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="support_from_agencyno">{t("NO")}</label>
                        <input
                          type="radio"
                          name="support_from_agency"
                          id="support_from_agencyno"
                          value="NO"
                          onClick={() => {
                            setA8(null);
                          }}
                          required="required"
                          onChange={handleChange}
                          checked={formD.support_from_agency == "NO"}
                        />
                      </div>
                    </div>
                  </tr>
                  {a8 != "show8" ? (
                    ""
                  ) : (
                    <tr
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <td
                        className="input_label_gapper"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          border: "none",
                        }}
                        colSpan={6}
                      >
                        <label htmlFor="govt_scheme-1">{t("Scheme")}: </label>
                        <input
                          style={{ width: "95%" }}
                          type="text"
                          id="govt_scheme-1"
                          name="govt_scheme"
                          required="required"
                          onChange={handleChange}
                          value={formD.govt_scheme}
                        />
                      </td>
                      <td
                        className="input_label_gapper"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          border: "none",
                        }}
                        colSpan={6}
                      >
                        <label htmlFor="govt_program-1">{t("Program")}: </label>
                        <input
                          style={{ width: "95%" }}
                          type="text"
                          id="govt_program-1"
                          name="govt_program"
                          required="required"
                          onChange={handleChange}
                          value={formD.govt_program}
                        />
                      </td>
                      <td
                        className="input_label_gapper"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          border: "none",
                        }}
                        colSpan={6}
                      >
                        <label htmlFor="govt_organisation-1">
                          {t(" Name of Organisation")}:{" "}
                        </label>
                        <input
                          style={{ width: "95%" }}
                          type="text"
                          id="govt_organisation-1"
                          name="govt_organisation"
                          required="required"
                          onChange={handleChange}
                          value={formD.govt_organisation}
                        />
                      </td>
                    </tr>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>
                    {" "}
                    {t(
                      "Do you have PAN card on the name of your company"
                    )}?{" "}
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="pan_card_companyyes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="pan_card_company"
                        id="pan_card_companyyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.pan_card_company == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="pan_card_companyno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="pan_card_company"
                        id="pan_card_companyno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.pan_card_company == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>{t("Do you have GST No")}.? </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="GST_NOyes1x">{t("YES")}</label>
                      <input
                        type="radio"
                        name="GST_NO"
                        id="GST_NOyes1x"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.GST_NO == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="GST_NOno1y">{t("NO")}</label>
                      <input
                        type="radio"
                        name="GST_NO"
                        id="GST_NOno1y"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.GST_NO == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td colSpan={1}>
                  <>{t("Do you have a Current Bank Account")}? </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="thisCurrent_Bank_Accountyes1x">
                        {t("YES")}
                      </label>
                      <input
                        type="radio"
                        name="thisCurrent_Bank_Account"
                        id="thisCurrent_Bank_Accountyes1x"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.thisCurrent_Bank_Account == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="thisCurrent_Bank_Accountno1y">
                        {t("NO")}
                      </label>
                      <input
                        type="radio"
                        name="thisCurrent_Bank_Account"
                        id="thisCurrent_Bank_Accountno1y"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.thisCurrent_Bank_Account == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td colSpan={1}>
                  <>
                    {" "}
                    {t(
                      "Do you have CA audited financial statement for Last FY 2021-2022"
                    )}{" "}
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="have_CA_audited_financial_statementyes">
                        {t("YES")}
                      </label>
                      <input
                        type="radio"
                        name="have_CA_audited_financial_statement"
                        id="have_CA_audited_financial_statementyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={
                          formD.have_CA_audited_financial_statement == "YES"
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="have_CA_audited_financial_statementno">
                        {t("NO")}
                      </label>
                      <input
                        type="radio"
                        name="have_CA_audited_financial_statement"
                        id="have_CA_audited_financial_statementno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={
                          formD.have_CA_audited_financial_statement == "NO"
                        }
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Annual_Turnover">
                    {t("Annual Turnover (Avg last 3 years) (in Rs.)")}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Annual_Turnover"
                    name="Annual_Turnover"
                    required="required"
                    onChange={handleChange}
                    value={formD.Annual_Turnover}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Investment_plant_machinery">
                    {t("Investment in plant & machinery (Avg last 3 years)")}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Investment_plant_machinery"
                    name="Investment_plant_machinery"
                    // required="required"
                    onChange={handleChange}
                    value={formD.Investment_plant_machinery}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Investment_IT_Infrastructure">
                    {t("Investment in IT Infrastructure (Avg in Last 3 Years)")}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Investment_IT_Infrastructure"
                    name="Investment_IT_Infrastructure"
                    // required="required"
                    onChange={handleChange}
                    value={formD.Investment_IT_Infrastructure}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>{t("Do you Export")} ? </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="You_Exportyes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="You_Export"
                        id="You_Exportyes"
                        onClick={() => {
                          setA9("show9");
                        }}
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.You_Export == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="You_Exportno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="You_Export"
                        id="You_Exportno"
                        value="NO"
                        onClick={() => {
                          setA9(null);
                        }}
                        required="required"
                        onChange={handleChange}
                        checked={formD.You_Export == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              {a9 != "show9" ? (
                ""
              ) : (
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Export_Value">
                      {t("Export value (avg in last 3 yrs)")}{" "}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Export_Value"
                      name="Export_Value"
                      required="required"
                      onChange={handleChange}
                      value={formD.Export_Value}
                    />
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Overall_Annual_production">
                    {t("Overall Annual Production")}:{" "}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Overall_Annual_production"
                    name="Overall_Annual_production"
                    //required="required"
                    onChange={handleChange}
                    value={formD.Overall_Annual_production}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Electric_Availability_Hours">
                    {t("Electricity availability for how many hours")}?{" "}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Electric_Availability_Hours"
                    name="Electric_Availability_Hours"
                    required="required"
                    onChange={handleChange}
                    value={formD.Electric_Availability_Hours}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Electricity_rate_Per_Unit">
                    {t("Electricity rate per unit")}{" "}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Electricity_rate_Per_Unit"
                    name="Electricity_rate_Per_Unit"
                    required="required"
                    onChange={handleChange}
                    value={formD.Electricity_rate_Per_Unit}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>{t("Is water availability a constraint")}? </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="Water_Availabilityyes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="Water_Availability"
                        id="Water_Availabilityyes"
                        required="required"
                        value="YES"
                        onChange={handleChange}
                        checked={formD.Water_Availability == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="Water_Availabilityno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="Water_Availability"
                        id="Water_Availabilityno"
                        required="required"
                        value="NO"
                        onChange={handleChange}
                        checked={formD.Water_Availability == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>{t("Is there a constraint for Effluent Treatment")}? </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="Effluent_Treatment_Constraintyes">
                        {t("YES")}
                      </label>
                      <input
                        type="radio"
                        name="Effluent_Treatment_Constraint"
                        id="Effluent_Treatment_Constraintyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Effluent_Treatment_Constraint == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="Effluent_Treatment_Constraintno">
                        {t("NO")}
                      </label>
                      <input
                        type="radio"
                        name="Effluent_Treatment_Constraint"
                        id="Effluent_Treatment_Constraintno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.Effluent_Treatment_Constraint == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <>
                    {" "}
                    {t(
                      "Did you undergo any training activities or attend seminars/awareness program of the Govt. for MSME Sector"
                    )}
                    ?{" "}
                  </>
                </td>
                <td colSpan={6}>
                  <div className="radio_wrapper wrapup">
                    <div>
                      <label htmlFor="undergo_activityyes">{t("YES")}</label>
                      <input
                        type="radio"
                        name="GOVT_Training"
                        id="undergo_activityyes"
                        value="YES"
                        required="required"
                        onChange={handleChange}
                        checked={formD.GOVT_Training == "YES"}
                      />
                    </div>
                    <div>
                      <label htmlFor="undergo_activityno">{t("NO")}</label>
                      <input
                        type="radio"
                        name="GOVT_Training"
                        id="undergo_activityno"
                        value="NO"
                        required="required"
                        onChange={handleChange}
                        checked={formD.GOVT_Training == "NO"}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Email">{t("Email")} : </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    //required="required"
                    onChange={handleChange}
                    value={formD.Email}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Phone_Number">{t("Phone No")}. : </label>
                </td>
                <td colSpan={6}>
                  <input
                    type="number"
                    id="Phone_Number"
                    name="Phone_Number"
                    required="required"
                    onChange={handleChange}
                    value={formD.Phone_Number}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 15px",
          fontSize: "large",
        }}
      >
        {/* <ToastContainer /> */}
        <NavLink to="/eForm/" className="arrow_notation">
          {t("Prev")}
        </NavLink>
        <NavLink to="/eForm/2" className="arrow_notation" onClick={validate}>
          {t("Next")}
        </NavLink>
      </div>
      {/* <FormPart2 />
        <FormPart3 />
        <FormPart4 />
        <FormPart5 />
      <FormPart6 /> */}
    </>
  );
}

export default Table;
