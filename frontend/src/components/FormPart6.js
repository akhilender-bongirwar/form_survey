import React from "react";
import "./Table.css";
function FormPart6() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          Do you face any challenge while getting payments from buyer? <br />
          If Yes, What are the challenges you are facing to receive payment from
          buyers for supplying materials?
        </div>
        <div>
          <input
            type="text"
            id="question"
            name="face_challenge_from_buyer"
            placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
            style={{ width: "60%", border: "transparent" }}
          />
        </div>
        <div>
          <h2 style={{ background: "grey", margin: "0.5em", display: "flex" }}>
            Questionnaire For Exporters
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Currently owned</th>
                <th>To be required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Certifications</td>
                <td>
                  <input
                    type="text"
                    id="certificate1"
                    name="Currently_owned-1"
                    style={{ width: "50%", border: "transparent" }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="certificate2"
                    name="To_be_Required-1"
                    style={{ width: "50%", border: "transparent" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Infrastructure</td>
                <td>
                  <input
                    type="text"
                    id="infra1"
                    name="Currently_owned-2"
                    style={{ width: "50%", border: "transparent" }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="infra2"
                    name="To_be_Required-2"
                    style={{ width: "50%", border: "transparent" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Laboratory</td>
                <td>
                  <input
                    type="text"
                    id="lab1"
                    name="Currently_owned-3"
                    style={{ width: "50%", border: "transparent" }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="lab2"
                    name="To_be_Required-3"
                    style={{ width: "50%", border: "transparent" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ fontSize: "1.2em", padding: "0.75em" }}>
          • Any certification specific to export requirement which is currently
          not available? (Please specify).
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
          • Any laboratory testing facility specific to export requirement which
          is currently not available?
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
          <h2 style={{ background: "grey", margin: "0.5em", display: "flex" }}>
            Requirement of Soft-Interventions
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
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
                    style={{ width: "50%", border: "transparent" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormPart6;
