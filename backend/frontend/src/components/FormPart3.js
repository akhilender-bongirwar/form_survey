import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Table.css";
import { t } from "i18next";
function FormPart3({ formD, setFormD }) {
  const form = document.getElementById("formy");
  // const err = form.querySelectorAll(`[data-aware]`);
  // const err1 = form.querySelectorAll(`[data-aware1]`);
  // console.log("hello i am ",Array.from(err));
  // console.log("hello i am2 ",Array.from(err1));
  const navigate = useNavigate();
  const validate = (e) => {
    const form = document.getElementById("formy");

    const checkboxes1 = form.querySelectorAll(`[data-aware]`);
    const checkboxes2 = form.querySelectorAll(`[data-aware1]`);
    const checkboxes3 = form.querySelectorAll(`[data-avail]`);
    const checkboxes4 = form.querySelectorAll(`[data-avail1]`);
    console.log(checkboxes1);
    console.log(checkboxes2);
    // console.log("these are",checkboxes)
    var checked1 = false;
    var checked2 = false;
    var checked3 = false;
    var checked4 = false;

    checkboxes1.forEach(function (checkbox) {
      if (checkbox.checked) {
        checked1 = true;
      }
    });
    checkboxes2.forEach(function (checkbox) {
      if (checkbox.checked) {
        checked2 = true;
      }
    });
    checkboxes3.forEach(function (checkbox) {
      if (checkbox.checked) {
        checked3 = true;
      }
    });
    checkboxes4.forEach(function (checkbox) {
      if (checkbox.checked) {
        checked4 = true;
      }
    });
    const err1 = form.querySelector(`[data-aware]`);
    const err2 = form.querySelector(`[data-aware1]`);
    const err3 = form.querySelector(`[data-avail]`);
    const err4 = form.querySelector(`[data-avail1]`);
    // console.log(checked);
    //var ischecked = err.reportValidity();
    if (!checked1) {
      err1.setCustomValidity("select any one option");
      console.log("f1 is empty");
    } else {
      err1.setCustomValidity("");
    }
    if (!checked2) {
      err2.setCustomValidity("select any one option");
      console.log("field2 is empty");
    } else {
      err2.setCustomValidity("");
    }
    if (!checked3) {
      err3.setCustomValidity("select any one of option");
      console.log("field3 is empty");
    } else {
      err3.setCustomValidity("");
    }
    if (!checked4) {
      err4.setCustomValidity("select any one of option");
      console.log("field4 is empty");
    } else {
      err4.setCustomValidity("");
      console.log("NO empty field");
      //navigate("/4");
    }
    if (checked1 && checked2 && checked3 && checked4) {
      console.log("Now you can navigate to next page");
      navigate("/4");
    }

    const isV = document.getElementById("formy").reportValidity();

    if (!isV) {
      e.preventDefault();
    } else {
      navigate("/4");
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          width: "75vw",
          flexWrap: "wrap",
          overflowWrap: "break-word",
          borderBottom: "0",
          backgroundColor: "rgb(240 235 248 / 77%)",
        }}
      >
        <table style={{ width: "100%", overflowWrap: "break-word" }}>
          <tr>
            <td colSpan={1}>
              <span>
                {t(
                  "Are you aware about the current government programs benefitting MSMEs"
                )}{" "}
              </span>
            </td>
            <td colSpan={6}>
              <div className="radio_wrapper">
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
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <span>
                {t(
                  "Which program benefits are you availing currently from the state? Please describe the key benefits and challenges related to the program"
                )}
              </span>
            </td>
            <td colSpan={6}>
              <tr>
                <td colSpan={1}>
                  <tr>
                    <span>{t("Name of the program")}</span>
                  </tr>
                  <tr>
                    <label style={{ textAlign: "center" }} htmlFor="Anything">
                      1.
                    </label>
                    <input
                      type="text"
                      id="Anything"
                      name="policy_program_1"
                      value={formD.policy_program_1}
                      onChange={handleChange}
                      style={{
                        width: "90%",
                        border: "transparent",
                        borderBottom: "2px solid black",
                      }}
                    />
                  </tr>
                  <tr>
                    <label htmlFor="Anything1">2.</label>
                    <input
                      type="text"
                      id="Anything1"
                      name="policy_program_2"
                      value={formD.policy_program_2}
                      onChange={handleChange}
                      style={{
                        width: "90%",
                        border: "transparent",
                        borderBottom: "2px solid black",
                      }}
                    />
                  </tr>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <label htmlFor="benefits">
                    {t("Nature of assistance/Benefits")}:
                  </label>
                  <input
                    type="text"
                    name="Policy_benifitted"
                    id="benefits"
                    onChange={handleChange}
                    value={formD.Policy_benifitted}
                    style={{
                      width: "90%",
                      border: "transparent",
                      borderBottom: "2px solid black",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <label htmlFor="challenges">{t("Challenges")}:</label>
                  <input
                    type="text"
                    name="Challenges_faced_policy_related"
                    id="challenges"
                    onChange={handleChange}
                    value={formD.Challenges_faced_policy_related}
                    style={{
                      width: "90%",
                      border: "transparent",
                      borderBottom: "2px solid black",
                    }}
                  />
                </td>
              </tr>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <span>
                {t(
                  "What are your expectations from the State / Central Government (related to infra/training/finance/etc)"
                )}
              </span>
            </td>
            <td colSpan={6}>
              <div>
                <label style={{ textAlign: "center" }} htmlFor="Anything3">
                  1.
                </label>
                <input
                  type="text"
                  id="Anything3"
                  name="expectations_from_govt_1"
                  value={formD.expectations_from_govt_1}
                  onChange={handleChange}
                  style={{
                    width: "90%",
                    border: "transparent",
                    borderBottom: "2px solid black",
                  }}
                />
              </div>
              <div>
                <label htmlFor="Anything4">2.</label>
                <input
                  type="text"
                  id="Anything4"
                  name="expectations_from_govt_2"
                  value={formD.expectations_from_govt_2}
                  onChange={handleChange}
                  style={{
                    width: "90%",
                    border: "transparent",
                    borderBottom: "2px solid black",
                  }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <span>{t("Are you aware of any of the listed Schemes")}</span>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>{t("Central Government")}:</u>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                    className="grevience_redressal radio_wrapper"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                        data-aware="ct"
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
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>{t("State Government")}:</u>
                  </div>
                  <div style={{ display: "flex" }} className="radio_wrapper">
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
                        data-avail="st"
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
                        data-avail="st"
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
                        data-avail="st"
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
                        data-avail="st"
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
                        data-avail="st"
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
                        data-avail="st"
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
            <td colSpan={1}>
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
                style={{
                  width: "50%",
                  border: "transparent",
                  borderBottom: "2px solid black",
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <span>{t("Which scheme would you like to avail")}?</span>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>{t("Central Government")}:</u>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                    className="grevience_redressal radio_wrapper"
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
                        data-aware1="ct1"
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
                        data-aware1="ct1"
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
                        data-aware1="ct1"
                        data-aware="ct"
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
                        data-aware1="ct1"
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
                        data-aware1="ct1"
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
                        data-aware1="ct1"
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
                        data-aware1="ct1"
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
                        data-aware1="ct1"
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
                        data-aware1="ct1"
                        checked={
                          formD.Scheme_Like_to_avail.Central_Govt.MSME_Champions
                        }
                        name="Scheme_Like_to_avail"
                        value="MSME_Champions"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>{t("State Government")}:</u>
                  </div>
                  <div style={{ display: "flex" }} className="radio_wrapper">
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
                        data-avail1="st"
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
                        data-avail1="st"
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
                        data-avail1="st"
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
                        data-avail1="st"
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
                        data-avail1="st"
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
                        data-avail1="st"
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
            <td colSpan={1}>
              <div>
                {t(
                  "What are the schemes under which you are availing benefits from Govt? (Both State and Central Govt separately)"
                )}
              </div>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  id="availedByMe"
                  name="scheme_availed_by_you_central_govt"
                  placeholder="central govt."
                  onChange={handleChange}
                  value={formD.scheme_availed_by_you_central_govt}
                  style={{
                    border: "transparent",
                    borderBottom: "2px solid black",
                  }}
                />
                <input
                  type="text"
                  id="availedByMe2"
                  placeholder="state govt."
                  name="scheme_availed_by_you_state_govt"
                  onChange={handleChange}
                  value={formD.scheme_availed_by_you_state_govt}
                  style={{
                    border: "transparent",
                    borderBottom: "2px solid black",
                  }}
                />
              </div>
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
          <NavLink to="/2" className="arrow_notation">
            {t("Prev")}
          </NavLink>
          <NavLink to="/4" className="arrow_notation" onClick={validate}>
            {t("Next")}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FormPart3;
