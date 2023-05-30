import React from "react";
import "./Table.css";
import { NavLink } from "react-router-dom";
function FormPart6({ formD, setFormD }) {
  function handleChange(event) {
    const { name, value, type, checked, className, id } = event.target;
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
    } else if (className == "Infrastructure") {
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
      <h1 style={{ marginBottom: "2em" }}>F. Online Dispute Resolution</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgb(240 235 248 / 77%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h2
              style={{
                background: "grey",
                margin: "0.5em",
                display: "flex",
                backgroundColor: "rgb(240 235 248 / 77%)",
              }}
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
                      className="Certifications"
                      name="Currently_owned_1"
                      value={formD.Certifications.Currently_owned_1}
                      style={{ border: "transparent" }}
                      placeholder="Currently owned"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="certificate2"
                      name="To_be_Required_1"
                      className="Certifications"
                      value={formD.Certifications.To_be_Required_1}
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Infrastructure</td>
                  <td>
                    <input
                      type="text"
                      id="infra1"
                      className="Infrastructure"
                      name="Currently_owned_2"
                      value={formD.Infrastructure.Currently_owned_2}
                      style={{ border: "transparent" }}
                      placeholder="Currently owned"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="infra2"
                      className="Infrastructure"
                      name="To_be_Required_2"
                      value={formD.Infrastructure.To_be_Required_2}
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Laboratory</td>
                  <td>
                    <input
                      type="text"
                      id="lab1"
                      className="Laboratory"
                      name="Currently_owned_3"
                      value={formD.Laboratory.Currently_owned_3}
                      style={{ border: "transparent" }}
                      placeholder="Currently owned"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="lab2"
                      name="To_be_Required_3"
                      className="Laboratory"
                      value={formD.Laboratory.To_be_Required_3}
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                      onChange={handleChange}
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
              value={formD.face_challenge_from_buyer}
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              onChange={handleChange}
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
              value={formD.Certification_required}
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              onChange={handleChange}
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
              value={formD.laboratory_requirement}
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      value={
                        formD.Requirement_of_Soft_Interventions.Counselling
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      name="Upgradation_of_IT_Infrastructure"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Upgradation_of_IT_Infrastructure
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Participation_in_Training
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Institution_Development
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      name="Implementation_of_new_software"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Implementation_of_new_software
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      name="Training_Process_Improvement"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Training_Process_Improvement
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      name="Market_Promotion_Initiatives"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Market_Promotion_Initiatives
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      name="Design_and_product_development"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Design_and_product_development
                      }
                      onChange={handleChange}
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
                      className="Requirement_of_Soft_Interventions"
                      name="Promotion_Campaign"
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Promotion_Campaign
                      }
                      onChange={handleChange}
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <NavLink to="/5" className="arrow_notation">
          Prev
        </NavLink>
      </div>
    </>
  );
}

export default FormPart6;
