import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Table.css";
import { t } from "i18next";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
function FormPart3({ formD, setFormD, addfields, setAddFields }) {
  const [chk, setchk] = useState(null);
  const navigate = useNavigate();
  const validate = (e) => {
    const isV = document.getElementById("formy").reportValidity();
    if (!isV) {
      e.preventDefault();
    } else {
      navigate("/eform/4");
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
    <h1 style={{ marginBottom: "2em" }}>
        {t("C. Policy Specific Information")}
      </h1>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflowY: "scroll",
        // backgroundColor: "rgb(240 235 248 / 77%)",
      }}
    >
      <div
        style={{
          width: "95vw",
          flexWrap: "wrap",
          overflowWrap: "break-word",
          borderBottom: "0",
        }}
      >
        <table style={{ width: "100%", overflowWrap: "break-word" }}>
          <tr>
            <td className="heading" colSpan={1}>
              <>
                {t(
                  "Are you aware about the current government programs benefitting MSMEs"
                )}{" "}
              </>
            </td>
            <td colSpan={6}>
              <div className="radio_wrapper wrapup">
                <div>
                  <label htmlFor="YES">{t("YES")}</label>
                  <input
                    type="radio"
                    name="aware_of_govt_policy"
                    id="YES"
                    value="YES"
                    required="required"
                    onChange={handleChange}
                    checked={formD.aware_of_govt_policy == "YES"}
                    onClick={() => {
                      setchk(true);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="NO">{t("NO")}</label>
                  <input
                    type="radio"
                    name="aware_of_govt_policy"
                    id="NO"
                    value="NO"
                    required="required"
                    onChange={handleChange}
                    checked={formD.aware_of_govt_policy == "NO"}
                    onClick={() => {
                      setchk(false);
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {chk ? (
            <tr>
              <td className="heading" colSpan={1}>
                <>
                  {t(
                    "Which program benefits are you availing currently from the state? Please describe the key benefits and challenges related to the program"
                  )}
                </>
              </td>
              <td colSpan={6} >
                <Tooltip title="Add">
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      setAddFields((prevobj) => {
                        return {
                          ...prevobj,
                          [Object.keys(prevobj).length]: {
                            name: "",
                            assistance: "",
                            challanges: "",
                          },
                        };
                      });
                    }}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton onClick={(e)=>{
                    let ree={...addfields}
                    delete ree[Object.values(ree).length-1]
                    e.preventDefault(); 
                    setAddFields(ree);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>

                <div className="wrapup">
                  {Object.values(addfields).map((obj, index) => {
                    return (
                      <div style={{ width: "100%", display: "flex",alignItems:"flex-end" }}>
                        <tr >
                          <td>
                            <>{t("Name of program")}</>
                          </td>
                          <td>
                            <input
                              type="text"
                              data-identity={`${index}`}
                              value={obj.name}
                              onChange={(e) => {
                                let id = e.target.dataset.identity;
                                console.log("target id", id);
                                setAddFields((prevobj) => {
                                  return {
                                    ...prevobj,
                                    [index]: {
                                      ...prevobj[index],
                                      name: e.target.value,
                                    },
                                  };
                                });
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="benefits">
                              {t("Assistance (Benefits)")}:
                            </label>
                          </td>
                          <td>
                            <input
                              type="text"
                              data-identity={`${index}`}
                              value={obj.assistance}
                              onChange={(e) => {
                                let id = e.target.dataset.identity;
                                console.log("target id", id);
                                setAddFields((prevobj) => {
                                  return {
                                    ...prevobj,
                                    [index]: {
                                      ...prevobj[index],
                                      assistance: e.target.value,
                                    },
                                  };
                                });
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td><label htmlFor="challenges">{t("Challenges")}:</label></td>
                          <td>
                            <input
                              type="text"
                              data-identity={`${index}`}
                              value={obj.challanges}
                              onChange={(e) => {
                                let id = e.target.dataset.identity;
                                console.log("target id", id);
                                setAddFields((prevobj) => {
                                  return {
                                    ...prevobj,
                                    [index]: {
                                      ...prevobj[index],
                                      challanges: e.target.value,
                                    },
                                  };
                                });
                              }}
                            />
                          </td>
                        </tr>
                      </div>
                    );
                  })}
                </div>
              </td>
            </tr>
          ) : null}

          <tr>
            <td className="heading" colSpan={1}>
              <>
                {t(
                  "What are your expectations from the State / Central Government (related to infra/training/finance/etc)"
                )}
              </>
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              colSpan={6}
            >
              <td>
                <label style={{ textAlign: "center" }} htmlFor="Anything3">
                  1.{" "}
                </label>
                <input
                  type="text"
                  id="Anything3"
                  name="expectations_from_govt_1"
                  value={formD.expectations_from_govt_1}
                  onChange={handleChange}
                  style={{
                    width: "90%"
                  }}
                />
              </td>
              <td>
                <label htmlFor="Anything4">2.{" "}</label>
                <input
                  type="text"
                  id="Anything4"
                  name="expectations_from_govt_2"
                  value={formD.expectations_from_govt_2}
                  onChange={handleChange}
                  style={{
                    width: "90%"
                  }}
                />
              </td>
            </td>
          </tr>
          <tr>
            <td className="heading" colSpan={1}>
              <>{t("Are you aware of any of the listed Schemes")}</>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <div style={{ marginBottom:"10px",fontWeight: "bold", fontSize: "larger" }}>
                    <h1>{t("Central Government")}:</h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                    className="grevience_redressal radio_wrapper wrapup"
                  >
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op1"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("ZED")}
                      </label>
                      <input
                        type="checkbox"
                        id="op1"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="ZED"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.ZED}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op2"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {"LEAN"}
                      </label>
                      <input
                        type="checkbox"
                        id="op2"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="LEAN"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt.LEAN
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op3"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("TRED")}s
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op3"
                        name="Aware_of_listed_scehmes"
                        value="TREDs"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt.TREDs
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op4"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Design scheme")}
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op4"
                        name="Aware_of_listed_scehmes"
                        value="Design_scheme"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt
                            .Design_scheme
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op5"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Digital Scheme")}
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op5"
                        name="Aware_of_listed_scehmes"
                        value="Digital_Scheme"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt
                            .Digital_Scheme
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op6"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("IPR scheme")}
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op6"
                        name="Aware_of_listed_scehmes"
                        value="IPR_scheme"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt.IPR_scheme
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op7"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Samadhan")}
                      </label>
                      <input
                        type="checkbox"
                        id="op7"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="Samadhan"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt.Samadhan
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op8"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("CGTMSE")}
                      </label>
                      <input
                        type="checkbox"
                        id="op8"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="CGTMSE"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt.CGTMSE
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op9"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("MSME Champions")}
                      </label>
                      <input
                        type="checkbox"
                        id="op9"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="MSME_Champions"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt
                            .MSME_Champions
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op10"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Not Aware")}
                      </label>
                      <input
                        type="checkbox"
                        id="op10"
                        className="central"
                        data-aware="ct"
                        name="Aware_of_listed_scehmes"
                        value="Not_Aware"
                        checked={
                          formD.Aware_of_listed_scehmes.Central_Govt.Not_Aware
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop:"30px",marginBottom:"10px", fontWeight: "bold", fontSize: "larger" }}>
                    <h1>{t("State Government")}:</h1>
                  </div>
                  <div style={{ display: "flex" }} className="radio_wrapper wrapup">
                    <div>
                      <label
                        htmlFor="opt1"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("ODOP")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt1"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        checked={formD.Aware_of_listed_scehmes.State_Govt.ODOP}
                        value="ODOP"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt2"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("UP MSME Promotion Policy")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt2"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        value="UP_MSME_Promotion_Policy"
                        checked={
                          formD.Aware_of_listed_scehmes.State_Govt
                            .UP_MSME_Promotion_Policy
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt3"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("Technical upgradation")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt3"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        value="Technical_upgradation"
                        checked={
                          formD.Aware_of_listed_scehmes.State_Govt
                            .Technical_upgradation
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt4"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          // whiteSpace: "nowrap",
                        }}
                      >
                        {t("UP Chief Minister Youth Self Employment Scheme")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt4"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        value="UP_Chief_Minister_Youth_Self_Employment_Scheme"
                        checked={
                          formD.Aware_of_listed_scehmes.State_Govt
                            .UP_Chief_Minister_Youth_Self_Employment_Scheme
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt5"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("UP Startup Policy 2020")}
                      </label>
                      <input
                        type="checkbox"
                        className="state"
                        id="opt5"
                        name="Aware_of_listed_scehmes"
                        checked={
                          formD.Aware_of_listed_scehmes.State_Govt
                            .UP_Startup_Policy_2020
                        }
                        value="UP_Startup_Policy_2020"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt6"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("Others")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt6"
                        className="state"
                        checked={
                          formD.Aware_of_listed_scehmes.State_Govt.Others
                        }
                        name="Aware_of_listed_scehmes"
                        value="Others"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt7"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("Not Aware")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt7"
                        className="state"
                        data-avail="st"
                        checked={
                          formD.Aware_of_listed_scehmes.State_Govt.Not_Aware
                        }
                        name="Aware_of_listed_scehmes"
                        value="Not_Aware"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="heading" colSpan={1}>
              <label htmlFor="remark">
                {t(
                  "Remarks (Specify if MSMEs are onboarded on any of the above on any of the above schemes)"
                )}
              </label>
            </td>
            <td colSpan={6}>
              <input
                type="text"
                id="remark"
                name="Remarks"
                onChange={handleChange}
                value={formD.Remarks}
              />
            </td>
          </tr>
          <tr>
            <td className="heading" colSpan={1}>
              <>{t("Which scheme would you like to avail")}?</>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <div style={{marginBottom:"10px", fontWeight: "bold", fontSize: "larger" }}>
                    <h1>{t("Central Government")}:</h1>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                    className="grevience_redressal radio_wrapper wrapup"
                  >
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op11"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("ZED")}
                      </label>
                      <input
                        type="checkbox"
                        id="op11"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.ZED}
                        name="Scheme_Like_to_avail"
                        value="ZED"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op22"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {"LEAN"}
                      </label>
                      <input
                        type="checkbox"
                        id="op22"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.LEAN}
                        name="Scheme_Like_to_avail"
                        value="LEAN"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op33"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("TREDs")}
                      </label>
                      <input
                        type="checkbox"
                        id="op33"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.TREDs}
                        name="Scheme_Like_to_avail"
                        value="TREDs"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op44"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Design scheme")}
                      </label>
                      <input
                        type="checkbox"
                        id="op44"
                        className="central"
                        checked={
                          formD.Scheme_Like_to_avail.Central_Govt.Design_scheme
                        }
                        name="Scheme_Like_to_avail"
                        value="Design_scheme"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op55"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Digital Scheme")}
                      </label>
                      <input
                        type="checkbox"
                        id="op55"
                        name="Scheme_Like_to_avail"
                        value="Digital_Scheme"
                        className="central"
                        checked={
                          formD.Scheme_Like_to_avail.Central_Govt.Digital_Scheme
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op66"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("IPR scheme")}
                      </label>
                      <input
                        type="checkbox"
                        id="op66"
                        name="Scheme_Like_to_avail"
                        value="IPR_scheme"
                        className="central"
                        checked={
                          formD.Scheme_Like_to_avail.Central_Govt.IPR_scheme
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op77"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Samadhan")}
                      </label>
                      <input
                        type="checkbox"
                        id="op77"
                        className="central"
                        checked={
                          formD.Scheme_Like_to_avail.Central_Govt.Samadhan
                        }
                        name="Scheme_Like_to_avail"
                        value="Samadhan"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op88"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("CGTMSE")}
                      </label>
                      <input
                        type="checkbox"
                        id="op88"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.CGTMSE}
                        name="Scheme_Like_to_avail"
                        value="CGTMSE"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op99"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("MSME Champions")}
                      </label>
                      <input
                        type="checkbox"
                        id="op99"
                        className="central"
                        checked={
                          formD.Scheme_Like_to_avail.Central_Govt.MSME_Champions
                        }
                        name="Scheme_Like_to_avail"
                        value="MSME_Champions"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop:"30px",marginBottom:"10px", fontWeight: "bold", fontSize: "larger" }}>
                    <h1>{t("State Government")}:</h1>
                  </div>
                  <div style={{ display: "flex" }} className="radio_wrapper wrapup">
                    <div>
                      <label
                        htmlFor="opt11"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("ODOP")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt11"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.ODOP}
                        name="Scheme_Like_to_avail"
                        value="ODOP"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt22"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("UP MSME Promotion Policy")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt22"
                        className="state"
                        checked={
                          formD.Scheme_Like_to_avail.State_Govt
                            .UP_MSME_Promotion_Policy
                        }
                        name="Scheme_Like_to_avail"
                        value="UP_MSME_Promotion_Policy"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt33"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("Technical upgradation")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt33"
                        className="state"
                        checked={
                          formD.Scheme_Like_to_avail.State_Govt
                            .Technical_upgradation
                        }
                        name="Scheme_Like_to_avail"
                        value="Technical_upgradation"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt44"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                        }}
                      >
                        {t("UP Chief Minister Youth Self Employment Scheme")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt44"
                        className="state"
                        checked={
                          formD.Scheme_Like_to_avail.State_Govt
                            .UP_Chief_Minister_Youth_Self_Employment_Scheme
                        }
                        name="Scheme_Like_to_avail"
                        value="UP_Chief_Minister_Youth_Self_Employment_Scheme"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt55"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t("UP Startup Policy 2020")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt55"
                        className="state"
                        checked={
                          formD.Scheme_Like_to_avail.State_Govt
                            .UP_Startup_Policy_2020
                        }
                        name="Scheme_Like_to_avail"
                        value="UP_Startup_Policy_2020"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt66"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        {t("Others")}
                      </label>
                      <input
                        type="checkbox"
                        id="opt66"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.Others}
                        name="Scheme_Like_to_avail"
                        value="Others"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="heading" colSpan={1}>
              <div>
                {t(
                  "What are the schemes under which you are availing benefits from Govt? (Both State and Central Govt separately)"
                )}
              </div>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <tr>
                <td>
                  <input
                    type="text"
                    id="availedByMe"
                    name="scheme_availed_by_you_central_govt"
                    placeholder={t("Central Govt")}
                    onChange={handleChange}
                    value={formD.scheme_availed_by_you_central_govt}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="availedByMe2"
                    placeholder={t("State Govt")}
                    name="scheme_availed_by_you_state_govt"
                    onChange={handleChange}
                    value={formD.scheme_availed_by_you_state_govt}
                  />
                </td>
              </tr>
            </td>
          </tr>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 15px",
            fontSize: "large",
          }}
        >
          <NavLink to="/eForm/2" className="arrow_notation">
            {t("Prev")}
          </NavLink>
          <NavLink to="/eForm/4" className="arrow_notation" onClick={validate}>
            {t("Next")}
          </NavLink>
        </div>
      </div>
    </div>
    </>
  );
}

export default FormPart3;
