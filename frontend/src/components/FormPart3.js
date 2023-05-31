import React from "react";
import { NavLink } from "react-router-dom";
import "./Table.css";
function FormPart3({ formD, setFormD }) {
  function handleChange(event) {
    const { name, value, type, checked,className } = event.target;
    if (name === "sell_produce_majorly") {
        if(type=="text"){
            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],other: value}
                }
              })
        }
        else{

            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],[value]:checked}
                }
              })
        }
    }
    else if(name==="service_industry"){
        if(type=="text"){
            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],other: value}
                }
              })
        }
        else{
            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],[value]:checked}
                }
              })
        }
    } 
    else if(name==="Aware_of_listed_scehmes"){
      if(className=="central"){
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {...prevFormData[name],Central_Govt:{...prevFormData[name].Central_Govt,[value]:type === "checkbox" ? checked : value}}
          }
        })
      }
      else{
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {...prevFormData[name],State_Govt:{...prevFormData[name].State_Govt,[value]:type === "checkbox" ? checked : value}}
          }
        })
      }
    }
    else if(name==="Scheme_Like_to_avail"){
      if(className=="central"){
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {...prevFormData[name],Central_Govt:{...prevFormData[name].Central_Govt,[value]:type === "checkbox" ? checked : value}}
          }
        })
      }
      else{
        setFormD((prevFormData) => {
          return {
            ...prevFormData,
            [name]: {...prevFormData[name],State_Govt:{...prevFormData[name].State_Govt,[value]:type === "checkbox" ? checked : value}}
          }
        })
      }
    }
    else if (name === "Key_Reason_Preventing_loan") {
        if(type=="text"){
            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],other: value}
                }
              })
        }
        else{

            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],[value]:checked}
                }
              })
        }
    }
    else if (name === "applied_loan_outcome") {
        if(type=="radio"){
            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],radio_button: value,other:""}
                }
              })
        }
        else{
            setFormD((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: {...prevFormData[name],other:value}
                }
              })
        }
    }
    else {
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
        height: "90vh",
        overflowY: "scroll",
        backgroundColor: "rgb(240 235 248 / 77%)",
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
            <td colSpan={1}>
              <span>
                Are you aware about the current government programs benefitting
                MSMEs{" "}
              </span>
            </td>
            <td colSpan={6}>
              <div className="radio_wrapper">
                <div>
                  <label htmlFor="YES">YES</label>
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
                  <label htmlFor="NO">NO</label>
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
                Which program benefits are you availing currently from the
                state? Please describe the key benefits and challenges related
                to the program
              </span>
            </td>
            <td colSpan={6}>
              <tr>
                <td colSpan={1}>
                  <tr>
                    <span>Name of the program</span>
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
                    Nature of assistance/Benefits:
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
                  <label htmlFor="challenges">Challenges:</label>
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
                What are your expectations from the State / Central Government
                (related to infra/training/finance/etc)
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
              <span>Are you aware of any of the listed Schemes</span>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>Central Government:</u>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                    className="grevience_redressal radio_wrapper"
                  >
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op1"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        ZED
                      </label>
                      <input
                        type="checkbox"
                        id="op1"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="ZED"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.ZED}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op2"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        LEAN
                      </label>
                      <input
                        type="checkbox"
                        id="op2"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="LEAN"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.LEAN}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op3"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        TREDs
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op3"
                        name="Aware_of_listed_scehmes"
                        value="TREDs"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.TREDs}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op4"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        Design scheme
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op4"
                        name="Aware_of_listed_scehmes"
                        value="Design_scheme"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.Design_scheme}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op5"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        Digital Scheme
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op5"
                        name="Aware_of_listed_scehmes"
                        value="Digital_Scheme"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.Digital_Scheme}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op6"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        IPR scheme
                      </label>
                      <input
                        type="checkbox"
                        className="central"
                        id="op6"
                        name="Aware_of_listed_scehmes"
                        value="IPR_scheme"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.IPR_scheme}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op7"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        Samadhan
                      </label>
                      <input
                        type="checkbox"
                        id="op7"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="Samadhan"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.Samadhan}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op8"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        CGTMSE
                      </label>
                      <input
                        type="checkbox"
                        id="op8"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="CGTMSE"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.CGTMSE}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op9"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        MSME Champions
                      </label>
                      <input
                        type="checkbox"
                        id="op9"
                        className="central"
                        name="Aware_of_listed_scehmes"
                        value="MSME_Champions"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.Central_Govt.MSME_Champions}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>State Government:</u>
                  </div>
                  <div style={{ display: "flex" }} className="radio_wrapper">
                    <div>
                      <label
                        htmlFor="opt1"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        ODOP
                      </label>
                      <input
                        type="checkbox"
                        id="opt1"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        checked={formD.Aware_of_listed_scehmes.State_Govt.ODOP}
                        value="ODOP"
                        required="required"
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
                        UP MSME Promotion Policy
                      </label>
                      <input
                        type="checkbox"
                        id="opt2"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        value="UP_MSME_Promotion_Policy"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.State_Govt.UP_MSME_Promotion_Policy}
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
                        Technical upgradation
                      </label>
                      <input
                        type="checkbox"
                        id="opt3"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        value="Technical_upgradation"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.State_Govt.Technical_upgradation}
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
                        UP Chief Minister Youth Self Employment Scheme
                      </label>
                      <input
                        type="checkbox"
                        id="opt4"
                        className="state"
                        name="Aware_of_listed_scehmes"
                        value="UP_Chief_Minister_Youth_Self_Employment_Scheme"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.State_Govt.UP_Chief_Minister_Youth_Self_Employment_Scheme}
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
                        UP Startup Policy 2020
                      </label>
                      <input
                        type="checkbox"
                        className="state"
                        id="opt5"
                        name="Aware_of_listed_scehmes"
                        required="required"
                        checked={formD.Aware_of_listed_scehmes.State_Govt.UP_Startup_Policy_2020}
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
                        Others
                      </label>
                      <input
                        type="checkbox"
                        id="opt6"
                        className="state"
                        checked={formD.Aware_of_listed_scehmes.State_Govt.Others}
                        name="Aware_of_listed_scehmes"
                        value="Others"
                        required="required"
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
                Remarks (Specify if MSMEs are onboarded on any of the above on
                any of the above schemes)
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
              <span> Which scheme would you like to avail?</span>
            </td>
            <td colSpan={6} style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>Central Government:</u>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                    className="grevience_redressal radio_wrapper"
                  >
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op1"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        ZED
                      </label>
                      <input
                        type="checkbox"
                        id="op1"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.ZED}
                        name="Scheme_Like_to_avail"
                        value="ZED"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op2"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        LEAN
                      </label>
                      <input
                        type="checkbox"
                        id="op2"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.LEAN}
                        name="Scheme_Like_to_avail"
                        value="LEAN"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op3"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        TREDs
                      </label>
                      <input
                        type="checkbox"
                        id="op3"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.TREDs}
                        name="Scheme_Like_to_avail"
                        value="TREDs"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op4"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        Design scheme
                      </label>
                      <input
                        type="checkbox"
                        id="op4"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.Design_scheme}
                        name="Scheme_Like_to_avail"
                        value="Design_scheme"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op5"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        Digital Scheme
                      </label>
                      <input
                        type="checkbox"
                        id="op5"
                        name="Scheme_Like_to_avail"
                        value="Digital_Scheme"
                        className="central"
                        required="required"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.Digital_Scheme}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op6"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        IPR scheme
                      </label>
                      <input
                        type="checkbox"
                        id="op6"
                        name="Scheme_Like_to_avail"
                        value="IPR_scheme"
                        required="required"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.IPR_scheme}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op7"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        Samadhan
                      </label>
                      <input
                        type="checkbox"
                        id="op7"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.Samadhan}
                        name="Scheme_Like_to_avail"
                        required="required"
                        value="Samadhan"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op8"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        CGTMSE
                      </label>
                      <input
                        type="checkbox"
                        id="op8"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.CGTMSE}
                        name="Scheme_Like_to_avail"
                        required="required"
                        value="CGTMSE"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d_flex_align_CONTENT_justify">
                      <label
                        htmlFor="op9"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        MSME Champions
                      </label>
                      <input
                        type="checkbox"
                        id="op9"
                        className="central"
                        checked={formD.Scheme_Like_to_avail.Central_Govt.MSME_Champions}
                        name="Scheme_Like_to_avail"
                        required="required"
                        value="MSME_Champions"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <u>State Government:</u>
                  </div>
                  <div style={{ display: "flex" }} className="radio_wrapper">
                    <div>
                      <label
                        htmlFor="opt1"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        ODOP
                      </label>
                      <input
                        type="checkbox"
                        id="opt1"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.ODOP}
                        name="Scheme_Like_to_avail"
                        required="required"
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
                        UP MSME Promotion Policy
                      </label>
                      <input
                        type="checkbox"
                        id="opt2"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.UP_MSME_Promotion_Policy}
                        name="Scheme_Like_to_avail"
                        value="UP_MSME_Promotion_Policy"
                        required="required"
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
                        Technical upgradation
                      </label>
                      <input
                        type="checkbox"
                        id="opt3"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.Technical_upgradation}
                        name="Scheme_Like_to_avail"
                        value="Technical_upgradation"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt4"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5em",
                        }}
                      >
                        UP Chief Minister Youth Self Employment Scheme
                      </label>
                      <input
                        type="checkbox"
                        id="opt4"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.UP_Chief_Minister_Youth_Self_Employment_Scheme}
                        name="Scheme_Like_to_avail"
                        value="UP_Chief_Minister_Youth_Self_Employment_Scheme"
                        required="required"
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
                        UP Startup Policy 2020
                      </label>
                      <input
                        type="checkbox"
                        id="opt5"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.UP_Startup_Policy_2020}
                        name="Scheme_Like_to_avail"
                        value="UP_Startup_Policy_2020"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="opt6"
                        style={{ fontSize: "0.9rem", padding: "0.5em" }}
                      >
                        Others
                      </label>
                      <input
                        type="checkbox"
                        id="opt6"
                        className="state"
                        checked={formD.Scheme_Like_to_avail.State_Govt.Others}
                        name="Scheme_Like_to_avail"
                        value="Others"
                        required="required"
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
                What are the schemes under which you are availing benefits from
                Govt? (Both State and Central Govt separately)
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
        <div style={{ marginTop: "1em" }}>
          <NavLink to="/2" className="arrow_notation">
            Prev
          </NavLink>
          <NavLink to="/4" className="arrow_notation">
            Next
          </NavLink>
        </div>      
      </div>
    </div>
  );
}

export default FormPart3;
