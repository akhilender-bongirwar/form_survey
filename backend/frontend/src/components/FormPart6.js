import React from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";
function FormPart6({ formD, setFormD }) {
  const [a61, setA61] = React.useState(null);
  const { t } = useTranslation();

  const navigate = useNavigate();
  const validate = (e) => {
    e.preventDefault();
    const isV = document.getElementById("formy").reportValidity();
    if (!isV) {
    } else {
      axios
        .post("/form-data", {
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
      <h1 style={{ marginBottom: "2em" }}>{t("F. Online Dispute Resolution")}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "rgb(240 235 248 / 77%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "rgb(240 235 248 / 77%)",
          }}
        >
          <div>
            <h2
              style={{
                // background: "grey",
                margin: "0.5em",
                display: "flex",
                // backgroundColor: "rgb(240 235 248 / 77%)",
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
            <table style={{ width: "100%" }}>
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

                      placeholder="To be required"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td >
                    {t("Do you face any challenge while getting payments from buyer")}?{t("If Yes, What are the challenges you are facing to receive payment from buyers for supplying materials")}
                  </td>
                  <td>
                    <input
                      type="text"
                      id="question"
                      name="face_challenge_from_buyer"
                      value={formD.face_challenge_from_buyer}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {t(
                      " Any certification specific to export requirement which is currently not available?"
                    )}
                    {t("If Yes, mention support required and tentative cost:")}
                  </td>
                  <td>
                    <input
                      type="text"
                      id="question"
                      name="Certification_required"
                      value={formD.Certification_required}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {t(
                      "Any laboratory testing facility specific to export requirement  which is currently not available?"
                    )}
                    {t("If Yes, mention support required and tentative cost:")}
                  </td>
                  <td>
                    <input
                      type="text"
                      id="question"
                      name="laboratory_requirement"
                      value={formD.laboratory_requirement}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
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

                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2
              style={{
                margin: "0.5em",
                display: "flex",
                marginTop: "2em",
              }}
            >
              {t("Entrepreneurship Skill Development Programme (ESDP) Training Requirement :")}
            </h2>
          </div>
          <table>
            <tr>
              <td>
                  {" "}
                  {t(
                    "Do you need any training program supported by Government of India for developing entrepreneurial skills?"
                  )}
              </td>
              <td colSpan={6}>
                <div style={{width:"20%"}} className="radio_wrapper">
                  <tr>
                    <label htmlFor="Requirement_of_Trainingyes">
                      {t("YES")}
                    </label>
                    <input
                      type="radio"
                      name="Requirement_of_Training"
                      id="Requirement_of_Trainingyes"
                      value="YES"
                      required="required"
                      onClick={() => setA61("show61")}
                      onChange={handleChange}
                      checked={formD.Requirement_of_Training == "YES"}
                    />
                  </tr>
                  <tr>
                    <label htmlFor="Requirement_of_Trainingno">{t("NO")}</label>
                    <input
                      type="radio"
                      name="Requirement_of_Training"
                      id="Requirement_of_Trainingno"
                      value="NO"
                      required="required"
                      onClick={() => setA61(null)}
                      onChange={handleChange}
                      checked={formD.Requirement_of_Training == "NO"}
                    />
                  </tr>
                </div>
              </td>
            </tr>
            {a61 != "show61" ? "" :
              <tr>
                <td colSpan={1}>
                  <label htmlFor="ESDP_beneficiaries">{t(
                    "In yes, then who will be the beneficiaries(entrepreneurs, students, etc) ?"
                  )}{" "}</label>
                </td>
                <td colSpan={6}>
                  <input
                    style={{ minWidth: "20px", marginBottom: "12px" }}
                    type="text"
                    id="ESDP_beneficiaries"
                    name="ESDP_beneficiaries"
                    onChange={handleChange}
                    required="required"
                    value={formD.ESDP_beneficiaries}
                  />
                </td>
              </tr>}
            <tr>
              <td colSpan={7}>
                <p style={{ textAlign: "center" }}><b>{t("Point of Contact Member Details")}</b></p>
              </td>
            </tr>
            <tr>
              <td colSpan={1}>
                <label htmlFor="Contact_Member_details_name">{t("Name :")}</label>
              </td>
              <td colSpan={6}>
                <input
                  type="text"
                  id="Contact_Member_details_name"
                  name="Contact_Member_details_name"
                  onChange={handleChange}
                  required="required"
                  value={formD.Contact_Member_details_name}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={1}>
                <label htmlFor="Contact_Member_details_contact">{t("Contact :")}</label>
              </td>
              <td colSpan={6}>
                <input
                  type="text"
                  id="Contact_Member_details_contact"
                  name="Contact_Member_details_contact"
                  onChange={handleChange}
                  required="required"
                  value={formD.Contact_Member_details_contact}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={1}>
                <label htmlFor="Contact_Member_details_designation">{t("Designation :")}</label>
              </td>
              <td colSpan={6}>
                <input
                  type="text"
                  id="Contact_Member_details_designation"
                  name="Contact_Member_details_designation"
                  onChange={handleChange}
                  required="required"
                  value={formD.Contact_Member_details_designation}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={1}>
                <label htmlFor="Contact_Member_details_email">{t("Email :")}</label>
              </td>
              <td colSpan={6}>
                <input
                  type="email"
                  id="Contact_Member_details_email"
                  name="Contact_Member_details_email"
                  onChange={handleChange}
                  required="required"
                  value={formD.Contact_Member_details_email}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 15px",
          fontSize: "large",
        }}
      >
        <NavLink to="/5" className="arrow_notation">
          {t("Prev")}
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
