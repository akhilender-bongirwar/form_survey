import React from "react";
import "./Table.css";
function FormPart3() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          border: "0.2em solid black",
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
                  />
                </div>
                <div>
                  <label htmlFor="NO">NO</label>
                  <input
                    type="radio"
                    name="aware_of_govt_policy"
                    id="NO"
                    value="NO"
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
                      style={{ width: "90%", border: "transparent" }}
                    />
                  </tr>
                  <tr>
                    <label htmlFor="Anything1">2.</label>
                    <input
                      type="text"
                      id="Anything1"
                      style={{ width: "90%", border: "transparent" }}
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
                    style={{ width: "90%", border: "transparent" }}
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
                    style={{ width: "90%", border: "transparent" }}
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
                <label style={{ textAlign: "center" }} htmlFor="Anything">
                  1.
                </label>
                <input
                  type="text"
                  id="Anything"
                  style={{ width: "90%", border: "transparent" }}
                />
              </div>
              <div>
                <label htmlFor="Anything1">2.</label>
                <input
                  type="text"
                  id="Anything1"
                  style={{ width: "90%", border: "transparent" }}
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
                        name="Aware_of_listed_scehmes"
                        value="ZED"
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
                        name="Aware_of_listed_scehmes"
                        value="LEAN"
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
                        name="Aware_of_listed_scehmes"
                        value="TREDs"
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
                        name="Aware_of_listed_scehmes"
                        value="Design_scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="Digital_Scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="IPR_scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="Samadhan"
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
                        name="Aware_of_listed_scehmes"
                        value="CGTMSE"
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
                        name="Aware_of_listed_scehmes"
                        value="MSME Champions"
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
                        name="Aware_of_listed_scehmes"
                        value="ODOP"
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
                        name="Aware_of_listed_scehmes"
                        value="UP MSME Promotion Policy"
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
                        name="Aware_of_listed_scehmes"
                        value="Technical upgradation"
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
                        name="Aware_of_listed_scehmes"
                        value="UP Chief Minister Youth Self Employment Scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="UP Startup Policy 2020"
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
                        name="Aware_of_listed_scehmes"
                        value="Others"
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
                style={{ width: "50%", border: "transparent" }}
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
                        name="Aware_of_listed_scehmes"
                        value="ZED"
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
                        name="Aware_of_listed_scehmes"
                        value="LEAN"
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
                        name="Aware_of_listed_scehmes"
                        value="TREDs"
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
                        name="Aware_of_listed_scehmes"
                        value="Design_scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="Digital_Scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="IPR_scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="Samadhan"
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
                        name="Aware_of_listed_scehmes"
                        value="CGTMSE"
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
                        name="Aware_of_listed_scehmes"
                        value="MSME Champions"
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
                        name="Aware_of_listed_scehmes"
                        value="ODOP"
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
                        name="Aware_of_listed_scehmes"
                        value="UP MSME Promotion Policy"
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
                        name="Aware_of_listed_scehmes"
                        value="Technical upgradation"
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
                        name="Aware_of_listed_scehmes"
                        value="UP Chief Minister Youth Self Employment Scheme"
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
                        name="Aware_of_listed_scehmes"
                        value="UP Startup Policy 2020"
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
                        name="Aware_of_listed_scehmes"
                        value="Others"
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
                  style={{ border: "transparent" }}
                />
                <input
                  type="text"
                  id="availedByMe2"
                  placeholder="state govt."
                  name="scheme_availed_by_you_state_govt"
                  style={{ border: "transparent" }}
                />
              </div>
            </td>
          </tr>
        </table>
        {/* <div className="div-style" style={{ borderTop: 0 }}>
          <label className="inner-div-tag" >Are you aware about<br />the current
            government <br />programs benefitting<br />
            MSMEs </label>
          <div className="checkboxes">
            <div>
              <label htmlFor="YES" style={{ fontWeight: "500" }}>
                Yes
              </label>
              <input
                type="radio"
                name="aware_of_govt_policy"
                id="YES"
                value="YES"
                style={{ margin: "0.5%" }}
              />
            </div>
            <div>
              <label htmlFor="NO" style={{ fontWeight: "500" }}>
                No
              </label>
              <input
                type="radio"
                name="aware_of_govt_policy"
                value="NO"
                id="NO"
                style={{ margin: "0.5%" }}
              />
            </div>
          </div>
        </div> */}
        {/* <div className="div-style" style={{ borderTop: 0 }}>
          <div className="inner-div-tag" >Which program benefits are you<br />availing currently from the state?
            <br />Please describe the key benefits<br />
            and challenges related to the<br />
            program </div>
          <div>
            <label style={{ fontSize: "0.85em" }}>Name of the Program:</label>
            <div style={{ display: "flex" }}>
              <label htmlFor='Anything'>1.</label>
              <input type='text' id='Anything' style={{ width: "50%", border: "transparent" }} />
              <label htmlFor='Anything1'>2.</label>
              <input type='text' style={{ width: "50%", border: "transparent" }} />
            </div>
            <div style={{ display: "flex" }}>
              <label htmlFor='benefits' style={{ fontSize: "0.85em" }}>Nature of assistance/Benefits:</label>
              <input type='text' id='benefits' name='Policy_benifitted' style={{ width: "50%", border: "transparent" }} />
            </div>
            <div style={{ display: "flex" }}>
              <label htmlFor='challenges' style={{ fontSize: "0.85em" }}>Challenges:</label>
              <input type='text' id='challenges' name='Challenges_faced_policy_related' style={{ width: "50%", border: "transparent" }} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FormPart3;
