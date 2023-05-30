import React from "react";
import "./Table.css";
function FormPart6() {
  return (
    <>
      <h1 style={{ marginBottom: "2em" }}>F. Online Dispute Resolution</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h2
              style={{ background: "grey", margin: "0.5em", display: "flex" }}
            >
              Questionnaire For Exporters
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
              marginBottom: "1em",
            }}
          >
            <table style={{ width: "80%" }}>
              <tbody>
                <tr>
                  <td>Certifications</td>
                  <td>
                    <input
                      type="text"
                      id="certificate1"
                      name="Currently_owned_1"
                      style={{ border: "transparent" }}
                      placeholder="Currently owned"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="certificate2"
                      name="To_be_Required_1"
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Infrastructure</td>
                  <td>
                    <input
                      type="text"
                      id="infra1"
                      name="Currently_owned_2"
                      style={{ border: "transparent" }}
                      placeholder="Currently owned"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="infra2"
                      name="To_be_Required_2"
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Laboratory</td>
                  <td>
                    <input
                      type="text"
                      id="lab1"
                      name="Currently_owned_3"
                      style={{ border: "transparent" }}
                      placeholder="Currently owned"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="lab2"
                      name="To_be_Required_3"
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div style={{ fontSize: "1.2em", padding: "0.75em" }}>
              Do you face any challenge while getting payments from buyer?{" "}
              <br />
              If Yes, What are the challenges you are facing to receive payment
              from buyers for supplying materials?
            </div>
            <input
              type="text"
              id="question"
              name="face_challenge_from_buyer"
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              style={{ width: "60%", border: "transparent" }}
            />
          </div>

          <div style={{ fontSize: "1.2em", padding: "0.75em" }}>
            • Any certification specific to export requirement which is
            currently not available? (Please specify).
            <br />
            If Yes, mention support required and tentative cost:
          </div>
          <div>
            <input
              type="text"
              id="question"
              name="Certification_required"
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              style={{ width: "60%", border: "transparent" }}
            />
          </div>
          <div style={{ fontSize: "1.2em", padding: "0.75em" }}>
            • Any laboratory testing facility specific to export requirement
            which is currently not available?
            <br />
            (Please specify).
            <br />
            If Yes, mention support required and tentative cost:
          </div>
          <div>
            <input
              type="text"
              id="question"
              name="laboratory_requirement"
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              style={{ width: "60%", border: "transparent" }}
            />
          </div>
          <div>
            <h2
              style={{
                background: "grey",
                margin: "0.5em",
                display: "flex",
                marginTop: "2em",
              }}
            >
              Requirement of Soft-Interventions
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
              marginBottom: "1em",
            }}
          >
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>Counselling</td>
                  <td>
                    <input
                      type="text"
                      id="counselling"
                      name="Counselling"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Upgradation of IT Infrastructure</td>
                  <td>
                    <input
                      type="text"
                      id="upgrade"
                      name="Upgradation_of_IT_Infrastructure"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Participation in Training Session/Workshop/Seminar</td>
                  <td>
                    <input
                      type="text"
                      id="training"
                      name="Participation_in_Training"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Institution Development</td>
                  <td>
                    <input
                      type="text"
                      id="development"
                      name="Institution_Development"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Implementation of new software</td>
                  <td>
                    <input
                      type="text"
                      id="new_software"
                      name="Implementation_of_new_software"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Training / hand holding support for process improvement
                    <br />
                    tools (QMs, ISO, ERP etc.)
                  </td>
                  <td>
                    <input
                      type="text"
                      id="tools"
                      name="Training_Process_Improvement"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Market Promotion Initiatives</td>
                  <td>
                    <input
                      type="text"
                      id="promotion"
                      name="Market_Promotion_Initiatives"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Design and product development</td>
                  <td>
                    <input
                      type="text"
                      id="design"
                      name="Design_and_product_development"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Brand Building, Promotion Campaign</td>
                  <td>
                    <input
                      type="text"
                      id="campaign"
                      name="Promotion_Campaign"
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPart6;
