import React from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";
function FormPart6({ formD, setFormD }) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const validate = (e) => {
    e.preventDefault();
    const isV = document.getElementById("formy").reportValidity();
    if (!isV) {
    } else {
      axios
        .post("https://form-survey-34a5hvu2o-umeshsinghverma.vercel.app/form-data", {
          mode: "cors",
          body: formD,
        })
        .then((d) => {
          // console.log(d.data.success);
          if (!d.data.success) {
            // console.log("object");
            Object.entries(d.data.message.errors).map((elem) => {
              // console.log(elem);
              toast.error(elem[0] + " required");
              console.log(elem[0] + " required");
            });
          } else {
            toast.success("saved");
          }
        })
        .catch((e) => {
          toast.error(e);
          // console.log(e);
        });
    }
  };
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
              {t("Questionnaire For Exporters")}
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
                  <td>{t("Certifications")}</td>
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
                      required="required"
                      value={formD.Certifications.To_be_Required_1}
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>{t("Infrastructure")}</td>
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
                      required="required"
                      value={formD.Infrastructure.To_be_Required_2}
                      style={{ border: "transparent" }}
                      placeholder="To be required"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>{t("Laboratory")}</td>
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
                      required="required"
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
              {t("Do you face any challenge while getting payments from buyer")}
              ? <br />
              {t(
                "If Yes, What are the challenges you are facing to receive payment from buyers for supplying materials"
              )}
            </div>
            <input
              type="text"
              id="question"
              name="face_challenge_from_buyer"
              value={formD.face_challenge_from_buyer}
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              onChange={handleChange}
              style={{ border: "transparent" }}
            />
          </div>

          <div style={{ fontSize: "1.2em", padding: "0.75em" }}>
            •
            {t(
              " Any certification specific to export requirement which is currently not available?"
            )}
            (Please specify) <br />
            {t("If Yes, mention support required and tentative cost:")}
          </div>
          <div>
            <input
              type="text"
              id="question"
              name="Certification_required"
              value={formD.Certification_required}
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              onChange={handleChange}
              style={{ border: "transparent" }}
            />
          </div>
          <div style={{ fontSize: "1.2em", padding: "0.75em" }}>
            •{" "}
            {t(
              "Any laboratory testing facility specific to export requirement  which is currently not available?"
            )}
            <br />
            (Please specify).
            <br />
            {t("If Yes, mention support required and tentative cost:")}
          </div>
          <div>
            <input
              type="text"
              id="question"
              name="laboratory_requirement"
              value={formD.laboratory_requirement}
              placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
              onChange={handleChange}
              style={{ border: "transparent" }}
            />
          </div>
          <div>
            <h2
              style={{
                margin: "0.5em",
                display: "flex",
                marginTop: "2em",
              }}
            >
              {t("Requirement of Soft-Interventions")}
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
                  <td>{t("Counselling")}</td>
                  <td>
                    <input
                      type="text"
                      id="counselling"
                      name="Counselling"
                      className="Requirement_of_Soft_Interventions"
                      required="required"
                      value={
                        formD.Requirement_of_Soft_Interventions.Counselling
                      }
                      onChange={handleChange}
                      style={{ border: "transparent" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>{t("Upgradation of IT Infrastructure")}</td>
                  <td>
                    <input
                      type="text"
                      id="upgrade"
                      className="Requirement_of_Soft_Interventions"
                      name="Upgradation_of_IT_Infrastructure"
                      required="required"
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
                  <td>
                    {t("Participation in Training Session/Workshop/Seminar")}
                  </td>
                  <td>
                    <input
                      type="text"
                      id="training"
                      name="Participation_in_Training"
                      className="Requirement_of_Soft_Interventions"
                      required="required"
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
                  <td>{t("Institution Development")}</td>
                  <td>
                    <input
                      type="text"
                      id="development"
                      name="Institution_Development"
                      required="required"
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
                  <td>{t("Implementation of new software")}</td>
                  <td>
                    <input
                      type="text"
                      id="new_software"
                      className="Requirement_of_Soft_Interventions"
                      required="required"
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
                    {t(
                      " Training / hand holding support for process improvement tools (QMs, ISO, ERP etc.)"
                    )}
                  </td>
                  <td>
                    <input
                      type="text"
                      id="tools"
                      className="Requirement_of_Soft_Interventions"
                      name="Training_Process_Improvement"
                      required="required"
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
                  <td>{t("Market Promotion Initiatives")}</td>
                  <td>
                    <input
                      type="text"
                      id="promotion"
                      className="Requirement_of_Soft_Interventions"
                      name="Market_Promotion_Initiatives"
                      required="required"
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
                  <td>{t("Design and product development")}</td>
                  <td>
                    <input
                      type="text"
                      id="design"
                      className="Requirement_of_Soft_Interventions"
                      name="Design_and_product_development"
                      required="required"
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
                  <td>{t("Brand Building, Promotion Campaign")}</td>
                  <td>
                    <input
                      type="text"
                      id="campaign"
                      className="Requirement_of_Soft_Interventions"
                      name="Promotion_Campaign"
                      required="required"
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
      <ToastContainer />
      <div
        style={{ display: "flex", justifyContent: "space-between", margin: "0 15px", fontSize: "large" }}
      >
        <NavLink to="/5" className="arrow_notation">
          Prev
        </NavLink>
        <button
          type="submit"
          onClick={validate}
          className="arrow_notation submit"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default FormPart6;