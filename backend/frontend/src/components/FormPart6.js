import React from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FormPart2 from "./FormPart2";
function FormPart6({ formD, setFormD, expand2, expand, addfields }) {
  const [a611, setA611] = React.useState(null);
  const [a613, setA613] = React.useState(null);
  const [a612, setA612] = React.useState(null);
  const [a61, setA61] = React.useState(null);
  const { t } = useTranslation();

  const navigate = useNavigate();
  const validate = (e) => {
    e.preventDefault();
    const isV = document.getElementById("formy").reportValidity();
    if (!isV) {
    } else {
      let formDt = { ...formD, State_benefits_obj: addfields };
      if (formDt.Ownership_Pattern != "partnership") {
        formDt.ownership_female_partnership = "";
      }
      if (formDt.Cluster == "YES") {
        formDt.Cluster_No = "";
      } else {
        formDt.Cluster_Yes = "";
      }
      if (formDt.loan_availed == "NO") {
        formDt.loan_specification = "";
      }
      if (formDt.loan_adequate == "YES") {
        formDt.loan_required = "";
      }
      if (formDt.availed_loan_last_year == "NO") {
        formDt.availed_loan_amount = "";
      }
      if (formDt.innovation_RD == "NO") {
        formDt.innovation_RD_institute = "";
      }
      if (formDt.support_from_agency == "NO") {
        formDt.govt_scheme = "";
        formDt.govt_program = "";
        formDt.govt_organisation = "";
      }
      if (formDt.You_Export == "NO") {
        formDt.Export_Value = "";
      }
      if (formDt.if_Raw_Materials_available == "YES") {
        formDt.if_no_mention_difficulties = "";
      }
      if (formDt.have_product_brand_name == "NO") {
        formDt.Brand_name = "";
      }
      if (formDt.involved_in_marketing == "NO") {
        formDt.options_you_leverage_for_sale.exhibitions = false;
        formDt.options_you_leverage_for_sale.portals = false;
        formDt.options_you_leverage_for_sale.websites = false;
        formDt.options_you_leverage_for_sale.social_media = false;
        formDt.options_you_leverage_for_sale.Common_marketing_facility = false;
        formDt.options_you_leverage_for_sale.other = "";
      }
      if (formDt.Requirement_of_Training == "NO") {
        formDt.ESDP_beneficiaries = "";
      }
      if (expand2 == false) {
        formDt.Nature_of_Services_Offered.Nature_of_Services_Offered_a = "";
        formDt.Nature_of_Services_Offered.Nature_of_Services_Offered_b = "";
        formDt.Nature_of_Services_Offered.Nature_of_Services_Offered_c = "";
        formDt.Challenges_faced.Challenges_faced_a = "";
        formDt.Challenges_faced.Challenges_faced_b = "";
        formDt.Challenges_faced.Challenges_faced_c = "";
        formDt.Govt_Scheme_Challenges = "";
        formDt.Support_required = "";
      }
      if (expand == false) {
        formDt.Raw_Materials.radio_button = "";
        formDt.Raw_Materials.other = "";
        formDt.if_Raw_Materials_available = "";
        formDt.if_no_mention_difficulties = "";
        formDt.green_tech = "";
        formDt.environment_clearence = "";
        formDt.final_product_sold_to.Trader_Agents = false;
        formDt.final_product_sold_to.Wholesalers = false;
        formDt.final_product_sold_to.Retailers = false;
        formDt.final_product_sold_to.Large_Manufacturers_Anchor_units = false;
        formDt.final_product_sold_to.Exporters = false;
        formDt.final_product_sold_to.OEMs = false;
        formDt.final_product_sold_to.End_Users = false;
        formDt.final_product_sold_to.Others = false;
        formDt.markets_supplied.within_State = false;
        formDt.markets_supplied.outside_State = false;
        formDt.markets_supplied.outside_country = false;
        formDt.have_product_brand_name = "";
        formDt.Brand_name = "";
        formDt.challenges_while_selling.advance_technology = false;
        formDt.challenges_while_selling.quality_of_product = false;
        formDt.challenges_while_selling.market_competition = false;
        formDt.challenges_while_selling.capital = false;
        formDt.challenges_while_selling.branding_and_marketing = false;
        formDt.challenges_while_selling.other = "";
        formDt.involved_in_marketing = "";
        formDt.options_you_leverage_for_sale.exhibitions = false;
        formDt.options_you_leverage_for_sale.portals = false;
        formDt.options_you_leverage_for_sale.websites = false;
        formDt.options_you_leverage_for_sale.social_media = false;
        formDt.options_you_leverage_for_sale.Common_marketing_facility = false;
        formDt.options_you_leverage_for_sale.other = "";
        formDt.Quality_Testing_lab_available = "";
        formDt.labour_and_training = "";
        formDt.skilled_labour_is_required = "";
      }
      axios
        .post("/form-data", {
          mode: "cors",
          body: formDt,
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
            setTimeout(() => {
              navigate("/");
              window.location.reload();
            }, 500);
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
      <h1 style={{ marginBottom: "2em" }}>
        {t("F. Online Dispute Resolution")}
      </h1>
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
                  <td className="heading">
                    {t(
                      "Do you face any challenge while getting payments from buyer"
                    )}
                    ?
                    
                  </td>
                  {/* <td>
                    <input
                      type="text"
                      id="question"
                      name="face_challenge_from_buyer"
                      value={formD.face_challenge_from_buyer}
                      onChange={handleChange}
                    />
                  </td> */}
                  <td colSpan={6}>
                <div className="radio_wrapper wrapup">
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="face_challenge_from_buyeryes"
                    >
                      {t("YES")}
                    </label>
                    <input
                      type="radio"
                      name="face_challenge_from_buyer"
                      id="face_challenge_from_buyeryes"
                      value="YES"
                      required="required"
                      onClick={() => setA613("show613")}
                      onChange={handleChange}
                      checked={formD.face_challenge_from_buyer == "YES"}
                    />
                  </td>
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="face_challenge_from_buyerno"
                    >
                      {t("NO")}
                    </label>
                    <input
                      type="radio"
                      name="face_challenge_from_buyer"
                      id="face_challenge_from_buyerno"
                      value="NO"
                      required="required"
                      onClick={() => setA613(null)}
                      onChange={handleChange}
                      checked={formD.face_challenge_from_buyer == "NO"}
                    />
                  </td>
                </div>
              </td>
                </tr>
                {a613 != "show613" ? (
              ""
            ) : (
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="challenge_faced_payment">
                  {t(
                      "If Yes, What are the challenges you are facing to receive payment from buyers for supplying materials"
                    )}{" "}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    style={{ minWidth: "20px", marginBottom: "12px" }}
                    type="text"
                    id="challenge_faced_payment"
                    name="challenge_faced_payment"
                    onChange={handleChange}
                    required="required"
                    value={formD.challenge_faced_payment}
                  />
                </td>
              </tr>
            )}
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
                <tr>
                  <td className="heading">{t("Certifications")}</td>
                  <td>
                    <input
                      type="text"
                      id="certificate1"
                      className="Certifications"
                      name="Currently_owned_1"
                      value={formD.Certifications.Currently_owned_1}
                      placeholder={t("Currently owned")}
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
                      placeholder={t("To be required")}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">{t("Infrastructure")}</td>
                  <td>
                    <input
                      type="text"
                      id="infra1"
                      className="Infrastructure"
                      name="Currently_owned_2"
                      value={formD.Infrastructure.Currently_owned_2}
                      placeholder={t("Currently owned")}
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
                      placeholder={t("To be required")}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">{t("Laboratory")}</td>
                  <td>
                    <input
                      type="text"
                      id="lab1"
                      className="Laboratory"
                      name="Currently_owned_3"
                      value={formD.Laboratory.Currently_owned_3}
                      placeholder={t("Currently owned")}
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
                      placeholder={t("To be required")}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                
                <tr>
                  <td className="heading">
                    {t(
                      " Any certification specific to export requirement which is currently not available?"
                    )}
                  </td>
                  {/* <td>
                    <input
                      type="text"
                      id="question"
                      name="Certification_required"
                      value={formD.Certification_required}
                      onChange={handleChange}
                    />
                  </td> */}
                  <td colSpan={6}>
                <div className="radio_wrapper wrapup">
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="Certification_requiredyes"
                    >
                      {t("YES")}
                    </label>
                    <input
                      type="radio"
                      name="Certification_required"
                      id="Certification_requiredyes"
                      value="YES"
                      required="required"
                      onClick={() => setA611("show611")}
                      onChange={handleChange}
                      checked={formD.Certification_required == "YES"}
                    />
                  </td>
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="Certification_requiredno"
                    >
                      {t("NO")}
                    </label>
                    <input
                      type="radio"
                      name="Certification_required"
                      id="Certification_requiredno"
                      value="NO"
                      required="required"
                      onClick={() => setA611(null)}
                      onChange={handleChange}
                      checked={formD.Certification_required == "NO"}
                    />
                  </td>
                </div>
              </td>
              {a611 != "show611" ? (
              ""
            ) : (
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="Certification_export_support_required">
                  {t("If Yes, mention support required and tentative cost:")}{" "}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    style={{ minWidth: "20px", marginBottom: "12px" }}
                    type="text"
                    id="Certification_export_support_required"
                    name="Certification_export_support_required"
                    onChange={handleChange}
                    required="required"
                    value={formD.Certification_export_support_required}
                  />
                </td>
              </tr>
            )}
                </tr>
                <tr>
                  <td className="heading">
                    {t(
                      "Any laboratory testing facility specific to export requirement  which is currently not available?"
                    )}
                  </td>
                  {/* <td>
                    <input
                      type="text"
                      id="question"
                      name="laboratory_requirement"
                      value={formD.laboratory_requirement}
                      onChange={handleChange}
                    />
                  </td> */}
                  <td colSpan={6}>
                <div className="radio_wrapper wrapup">
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="laboratory_requirementyes"
                    >
                      {t("YES")}
                    </label>
                    <input
                      type="radio"
                      name="laboratory_requirement"
                      id="laboratory_requirementyes"
                      value="YES"
                      required="required"
                      onClick={() => setA612("show612")}
                      onChange={handleChange}
                      checked={formD.laboratory_requirement == "YES"}
                    />
                  </td>
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="laboratory_requirementno"
                    >
                      {t("NO")}
                    </label>
                    <input
                      type="radio"
                      name="laboratory_requirement"
                      id="laboratory_requirementno"
                      value="NO"
                      required="required"
                      onClick={() => setA612(null)}
                      onChange={handleChange}
                      checked={formD.laboratory_requirement == "NO"}
                    />
                  </td>
                </div>
              </td>
                </tr>
                {a612 != "show612" ? (
              ""
            ) : (
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="laboratory_export_support_required">
                  {t("If Yes, mention support required and tentative cost:")}{" "}
                  </label>
                </td>
                <td colSpan={6}>
                  <input
                    style={{ minWidth: "20px", marginBottom: "12px" }}
                    type="text"
                    id="laboratory_export_support_required"
                    name="laboratory_export_support_required"
                    onChange={handleChange}
                    required="required"
                    value={formD.laboratory_export_support_required}
                  />
                </td>
              </tr>
            )}
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
                  <td className="heading">{t("Counselling")}</td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">
                    {t("Upgradation of IT Infrastructure")}
                  </td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">
                    {t("Participation in Training Session/Workshop/Seminar")}
                  </td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">{t("Institution Development")}</td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">
                    {t("Implementation of new software")}
                  </td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">
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
                      value={
                        formD.Requirement_of_Soft_Interventions
                          .Training_Process_Improvement
                      }
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">
                    {t("Market Promotion Initiatives")}
                  </td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">
                    {t("Design and product development")}
                  </td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td className="heading">
                    {t("Brand Building, Promotion Campaign")}
                  </td>
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
                marginBottom: "2em",
              }}
            >
              {t(
                "Entrepreneurship Skill Development Programme (ESDP) Training Requirement :"
              )}
            </h2>
          </div>
          <table>
            <tr>
              <td className="heading">
                {" "}
                {t(
                  "Do you need any training program supported by Government of India for developing entrepreneurial skills?"
                )}
              </td>
              <td colSpan={6}>
                <div className="radio_wrapper wrapup">
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="Requirement_of_Trainingyes"
                    >
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
                  </td>
                  <td>
                    <label
                      style={{ marginRight: "20px" }}
                      htmlFor="Requirement_of_Trainingno"
                    >
                      {t("NO")}
                    </label>
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
                  </td>
                </div>
              </td>
            </tr>
            {a61 != "show61" ? (
              ""
            ) : (
              <tr>
                <td className="heading" colSpan={1}>
                  <label htmlFor="ESDP_beneficiaries">
                    {t(
                      "In yes, then who will be the beneficiaries(entrepreneurs, students, etc) ?"
                    )}{" "}
                  </label>
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
              </tr>
            )}
            <tr>
              <td colSpan={7}>
                <h1
                  style={{
                    display: "flex",
                    marginTop: "2em",
                    marginBottom: "2em",
                  }}
                >
                  {t("Point of Contact Member Details")}
                </h1>
              </td>
            </tr>
            <tr>
              <td className="heading" colSpan={1}>
                <label htmlFor="Contact_Member_details_name">
                  {t("Name :")}
                </label>
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
              <td className="heading" colSpan={1}>
                <label htmlFor="Contact_Member_details_contact">
                  {t("Contact :")}
                </label>
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
              <td className="heading" colSpan={1}>
                <label htmlFor="Contact_Member_details_designation">
                  {t("Designation :")}
                </label>
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
              <td className="heading" colSpan={1}>
                <label htmlFor="Contact_Member_details_email">
                  {t("Email :")}
                </label>
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
