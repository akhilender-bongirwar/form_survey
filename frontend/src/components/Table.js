import React, { useEffect, useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Table.css";
import Input from "./Input";
import { Form } from "react-router-dom";
import FormPart3 from "./FormPart3";
import axios from "axios";
import FormPart2 from "./FormPart2";
import FormPart4 from "./FormPart4";

import FormPart5 from "./FormPart5";
import FormPart6 from "./FormPart6";
// export async function dataaction({ request }) {
// const formData = await request.formData();
// // const checkformdata = Object.fromEntries(await request.formData());
// // console.log(checkformdata);
// const submission = {
//   Enterprise_Name: formData.get("Enterprise_Name"),
//   Entrepreneur_Name: formData.get("Entrepreneur_Name"),
//   Sex: formData.get("Sex"),
//   Category: formData.get("Category"),
//   Address: formData.get("Address"),
//   Firm_Registered: formData.get("Firm_Registered"),
//   Udyam_Registration: formData.get("Udyam_Registration"),
//   UAM_UEM_Number: formData.get("UAM_UEM_Number"),
//   Year_of_Establishment: formData.get("Year_of_Establishment"),
//   Type_of_Business: formData.get("Type_of_Business"),
//   Operations_seasonal: formData.get("Operations_seasonal"),
//   months_of_operation: formData.get("months_of_operation"),
//   Ownership_Pattern: formData.get("Ownership_Pattern"),
//   Cluster: formData.get("Cluster"),
//   IF_YES_HOW_MANY_UNITS: formData.get("IF_YES_HOW_MANY_UNITS"),
//   use_computer: formData.get("use_computer"),
//   TOP_THREE_PRODUCTS: [
//     formData.get("TOP_THREE_PRODUCTS-1"),
//     formData.get("TOP_THREE_PRODUCTS-2"),
//     formData.get("TOP_THREE_PRODUCTS-3"),
//   ],
//   sell_produce_majorly: formData.get("sell_produce_majorly"),
//   service_industry: formData.get("service_industry"),
//   full_time_Emoployee: formData.get("full_time_Emoployee"),
//   part_time_Emoployee: formData.get("part_time_Emoployee"),
//   Permanent_Emoployee: formData.get("Permanent_Emoployee"),
//   Contractual_Emoployee: formData.get("Contractual_Emoployee"),
//   male_employee: formData.get("male_employee"),
//   female_employee: formData.get("female_employee"),
//   formal_source: formData.get("formal_source"),
//   informal_source: formData.get("informal_source"),
//   internal_fund_generation: formData.get("internal_fund_generation"),
//   other_financing_source: formData.get("other_financing_source"),
//   loan_availed: formData.get("loan_availed"),
//   loan_specification: formData.get("loan_specification"),
//   loan_adequate: formData.get("loan_adequate"),
//   loan_required: formData.get("loan_required"),
//   availed_loan_last_year: formData.get("availed_loan_last_year"),
//   availed_loan_amount: formData.get("availed_loan_amount"),
//   innovation_RD: formData.get("innovation_RD"),
//   innovation_RD_institute: formData.get("innovation_RD_institute"),
//   govt_scheme: formData.get("govt_scheme"),
//   govt_program: formData.get("govt_program"),
//   govt_organisation: formData.get("govt_organisation"),
//   pan_card_company: formData.get("pan_card_company"),
//   GST_NO: formData.get("GST_NO"),
//   Current_Bank_Account: formData.get("Current_Bank_Account"),
//   have_CA_audited_financial_statement: formData.get(
//     "have_CA_audited_financial_statement"
//   ),
//   Annual_Turnover: formData.get("Annual_Turnover"),
//   Investment_plant_machinery: formData.get("Investment_plant_machinery"),
//   Investment_IT_Infrastructure: formData.get("Investment_IT_Infrastructure"),
//   You_Export: formData.get("You_Export"),
//   Export_Value: formData.get("Export_Value"),
//   Overall_Annual_production: formData.get("Overall_Annual_production"),
//   Electric_Availability_Hours: formData.get("Electric_Availability_Hours"),
//   Electricity_rate_Per_Unit: formData.get("Electricity_rate_Per_Unit"),
//   Water_Availability: formData.get("Water_Availability"),
//   Effluent_Treatment_Constraint: formData.get(
//     "Effluent_Treatment_Constraint"
//   ),
//   GOVT_Training: formData.get("GOVT_Training"),
//   Email: formData.get("Email"),
//   Phone_Number: formData.get("Phone_Number"),
//   Raw_Materials: formData.get("Raw_Materials"),
//   if_Raw_Materials_available: formData.get("if_Raw_Materials_available"),
//   if_no_mention_difficulties: formData.get("if_no_mention_difficulties"),
//   green_tech: formData.get("green_tech"),
//   environment_clearence: formData.get("environment_clearence"),
//   final_product_sold_to: formData.getAll("final_product_sold_to"),
//   markets_supplied: formData.get("markets_supplied"),
//   have_product_brand_name: formData.get("have_product_brand_name"),
//   Brand_name: formData.get("Brand_name"),
//   challenges_while_selling: formData.get("challenges_while_selling"),
//   involved_in_marketing: formData.get("involved_in_marketing"),
//   options_you_leverage_for_sale: formData.getAll(
//     "options_you_leverage_for_sale:"
//   ),
//   Quality_Testing_lab_available: formData.get(
//     "Quality_Testing_lab_available"
//   ),
//   labour_and_training: formData.get("labour_and_training"),
//   skilled_labour_is_required: formData.get("skilled_labour_is_required"),
//   Nature_of_Services_Offered: formData.getAll("Nature_of_Services_Offered"),
//   Challenges_faced: formData.getAll("Challenges_faced"),

//   Govt_Scheme_Challenges: formData.get("Govt_Scheme_Challenges"),
//   Support_required: formData.get("Support_required"),
//   aware_of_govt_policy: formData.get("aware_of_govt_policy"),
//   Policy_benifitted: formData.getAll("Policy_benifitted"),
//   Benifits_of_policy: formData.get("Policy_benifitted"),
//   Challenges_faced_policy_related: formData.get(
//     "Challenges_faced_policy_related"
//   ),
//   expectation_from_govt: formData.getAll("expectation_from_govt"),
//   Aware_of_listed_scehmes: {
//     Central_Govt: formData.getAll("Central_Govt"),
//     State_Govt: formData.getAll("State_Govt"),
//   },
//   Remarks: formData.get("Remarks"),
//   Scheme_Like_to_avail: {
//     Central_Govt: formData.getAll("Central_Govt2"),
//     State_Govt: formData.getAll("State_Govt2"),
//   },
//   scheme_availed_by_you_central_govt: formData.get(
//     "scheme_availed_by_you_central_govt"
//   ),
//   scheme_availed_by_you_state_govt: formData.get(
//     "scheme_availed_by_you_state_govt"
//   ),
//   Key_Reason_Preventing_loan: formData.getAll("Key_Reason_Preventing_loan"),
//   source_of_credit_form: formData.get("source_of_credit_form"),
//   applied_loan_outcome: formData.getAll("applied_loan_outcome"),
//   reason_of_rejection: formData.get("reason_of_rejection"),
//   availed_samadhaan_service: formData.get("availed_samadhaan_service"),
//   face_challenge_from_buyer: formData.get("face_challenge_from_buyer"),
//   Questionnaire_For_Exporters: {
//     Certifications: {
//       Currently_owned_1: formData.get("Currently_owned_1"),
//       To_be_Required_1: formData.get("To_be_Required_1"),
//     },
//     Infrastructure: {
//       Currently_owned_2: formData.get("Currently_owned_2"),
//       To_be_Required_2: formData.get("To_be_Required_2"),
//     },
//     Laboratory: {
//       Currently_owned_3: formData.get("Currently_owned_3"),
//       To_be_Required_3: formData.get("To_be_Required_3"),
//     },
//   },
//   Certification_required: formData.get("Certification_required"),
//   laboratory_requirement: formData.get("laboratory_requirement"),
//   Requirement_of_Soft_Interventions: {
//     Counselling: formData.get("Counselling"),
//     Upgradation_of_IT_Infrastructure: formData.get(
//       "Upgradation_of_IT_Infrastructure"
//     ),
//     Participation_in_Training: formData.get("Participation_in_Training"),
//     Institution_Development: formData.get("Institution_Development"),
//     Implementation_of_new_software: formData.get(
//       "Implementation_of_new_software"
//     ),
//     Training_Process_Improvement: formData.get(
//       "Training_Process_Improvement"
//     ),
//     Market_Promotion_Initiatives: formData.get(
//       "Market_Promotion_Initiatives"
//     ),
//     Design_and_product_development: formData.get(
//       "Design_and_product_development"
//     ),
//     Promotion_Campaign: formData.get("Promotion_Campaign"),
//   },
// };

// console.log(submission);
// axios
// .post("http://localhost:8080/form-data", {
//   body: submission,
// })
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => {
//   console.log(err);
// });
//   return null;
// }

function Table({ formD, setFormD }) {
  const [a1, setA1] = useState(null);
  const [a2, setA2] = useState(null);
  const [a3, setA3] = useState(null);
  const [a4, setA4] = useState(null);
  const [a5, setA5] = useState(null);
  const [a6, setA6] = useState(null);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (name === "sell_produce_majorly") {
      setFormD((prevFormData) => {
        return {
          ...prevFormData,
          [name]: {...prevFormData[name],[value]:type === "checkbox" ? checked : value}
        }
      })
    }
    else if(name==="service_industry"){
      setFormD(prevFormData => {
        return {
          ...prevFormData,
          [name]: {...prevFormData[name],[value]:type === "checkbox" ? checked : value},
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
      <form method="post">
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
            {/* <h2 style={{ marginLeft: "0.8em", padding: "2%" }}>
              {("A. MSME Specific Questionairre")}
            </h2> */}
            <table style={{ width: "100%", overflowWrap: "break-word" }}>
              <thead>
                <tr>
                  <th colSpan={2}>{"A. MSME Specific Questionairre"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Enterprise_Name">{"Enterprise name"}</label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="Enterprise_Name"
                      name="Enterprise_Name"
                      value={formD.Enterprise_Name}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Entrepreneur_Name">
                      {"Entrepreneur Name"}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="Entrepreneur_Name"
                      name="Entrepreneur_Name"
                      value={formD.Entrepreneur_Name}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>Sex:</span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="M">M</label>
                        <input
                          type="radio"
                          name="Sex"
                          id="M"
                          value="male"
                          onChange={handleChange}
                          checked={formD.Sex == "male"}
                        />
                      </div>
                      <div>
                        <label htmlFor="F">F</label>
                        <input
                          type="radio"
                          name="Sex"
                          id="F"
                          value="female"
                          onChange={handleChange}
                          checked={formD.Sex == "female"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>Category:</span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="SC">SC</label>
                        <input
                          type="radio"
                          name="Category"
                          id="SC"
                          value="SC"
                          onChange={handleChange}
                          checked={formD.Category == "SC"}
                        />
                      </div>
                      <div>
                        <label htmlFor="ST">ST</label>
                        <input
                          type="radio"
                          name="Category"
                          id="ST"
                          value="ST"
                          onChange={handleChange}
                          checked={formD.Category == "ST"}
                        />
                      </div>
                      <div>
                        <label htmlFor="OBC">OBC</label>
                        <input
                          type="radio"
                          name="Category"
                          id="OBC"
                          value="OBC"
                          onChange={handleChange}
                          checked={formD.Category == "OBC"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Minority">Minority</label>
                        <input
                          type="radio"
                          name="Category"
                          id="Minority"
                          value="Minority"
                          onChange={handleChange}
                          checked={formD.Category == "Minority"}
                        />
                      </div>
                      <div>
                        <label htmlFor="General">General</label>
                        <input
                          type="radio"
                          name="Category"
                          id="General"
                          value="General"
                          onChange={handleChange}
                          checked={formD.Category == "General"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Address">{"Address:"}</label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      onChange={handleChange}
                      value={formD.Address}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Website">{"Website:"}</label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="Website"
                      name="Website"
                      onChange={handleChange}
                      value={formD.Website}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>Is your firm registerd?</span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Firm_Registeredyes">YES</label>
                        <input
                          type="radio"
                          name="Firm_Registered"
                          id="Firm_Registeredyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Firm_Registered == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Firm_Registeredno">NO</label>
                        <input
                          type="radio"
                          name="Firm_Registered"
                          id="Firm_Registeredno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Firm_Registered == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      Do you have Udhyog Aadhar / Udyam Registration{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Udyam_Registrationyes">YES</label>
                        <input
                          type="radio"
                          name="Udyam_Registration"
                          id="Udyam_Registrationyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Udyam_Registration == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Udyam_Registrationno">NO</label>
                        <input
                          type="radio"
                          name="Udyam_Registration"
                          id="Udyam_Registrationno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Udyam_Registration == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="UAM_UEM_Number">Uam Uem Number</label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="UAM_UEM_Number"
                      name="UAM_UEM_Number"
                      onChange={handleChange}
                      value={formD.UAM_UEM_Number}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Year_of_Establishment">
                      Year_of_Establishment:
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="Year_of_Establishment"
                      name="Year_of_Establishment"
                      onChange={handleChange}
                      value={formD.Year_of_Establishment}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Type_of_Business </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="manufacturing">Manufacturing</label>
                        <input
                          type="radio"
                          name="Type_of_Business"
                          id="manufacturing"
                          value="manufacturing"
                          onChange={handleChange}
                          checked={formD.Type_of_Business == "manufacturing"}
                        />
                      </div>
                      <div>
                        <label htmlFor="service">Service</label>
                        <input
                          type="radio"
                          name="Type_of_Business"
                          id="service"
                          value="service"
                          onChange={handleChange}
                          checked={formD.Type_of_Business == "service"}
                        />
                      </div>
                      <div>
                        <label htmlFor="trading">Trading</label>
                        <input
                          type="radio"
                          name="Type_of_Business"
                          id="trading"
                          value="trading"
                          onChange={handleChange}
                          checked={formD.Type_of_Business == "trading"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Whether operations are seasonal in nature?</span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Operations_seasonalyes">YES</label>
                        <input
                          type="radio"
                          onClick={() => setA1("show1")}
                          name="Operations_seasonal"
                          id="Operations_seasonalyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Operations_seasonal == "YES"}
                        />
                      </div>
                      {a1 != "show1" ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <span>
                            In case seasonal operations, no. of months of
                            operations in a year{" "}
                          </span>
                          <input
                            style={{ minWidth: "20px", marginBottom: "12px" }}
                            type="number"
                            id="months_of_operation"
                            name="months_of_operation"
                            onChange={handleChange}
                            value={formD.months_of_operation}
                          />
                        </tr>
                      )}
                      <div>
                        <label htmlFor="Operations_seasonalno">NO</label>
                        <input
                          type="radio"
                          onClick={() => setA1(null)}
                          name="Operations_seasonal"
                          id="Operations_seasonalno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Operations_seasonal == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Ownership_Pattern </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper" id="ownership_pattern">
                      <div>
                        <label htmlFor="proprietary">Proprietary</label>
                        <input
                          type="radio"
                          name="Ownership_Pattern"
                          onClick={() => setA2(null)}
                          id="proprietary"
                          value="proprietary"
                          onChange={handleChange}
                          checked={formD.Ownership_Pattern == "proprietary"}
                        />
                      </div>
                      <div>
                        <label htmlFor="partnership">Partnership</label>
                        <input
                          type="radio"
                          onClick={() => setA2("show2")}
                          name="Ownership_Pattern"
                          id="partnership"
                          value="partnership"
                          onChange={handleChange}
                          checked={formD.Ownership_Pattern == "partnership"}
                        />
                      </div>
                      <div>
                        <label htmlFor="private">Private</label>
                        <input
                          type="radio"
                          onClick={() => setA2(null)}
                          name="Ownership_Pattern"
                          id="private"
                          value="private"
                          onChange={handleChange}
                          checked={formD.Ownership_Pattern == "private"}
                        />
                      </div>
                      <div>
                        <label htmlFor="LLP">LLP</label>
                        <input
                          type="radio"
                          onClick={() => setA2(null)}
                          name="Ownership_Pattern"
                          id="LLP"
                          value="LLP"
                          onChange={handleChange}
                          checked={formD.Ownership_Pattern == "LLP"}
                        />
                      </div>
                      <div>
                        <label htmlFor="PUBLIC">Public</label>
                        <input
                          type="radio"
                          onClick={() => setA2(null)}
                          name="Ownership_Pattern"
                          id="PUBLIC"
                          value="PUBLIC"
                          onChange={handleChange}
                          checked={formD.Ownership_Pattern == "PUBLIC"}
                        />
                      </div>
                      <div>
                        <label htmlFor="NO LEGAL ENTITY">No Legal Entity</label>
                        <input
                          type="radio"
                          onClick={() => setA2(null)}
                          name="Ownership_Pattern"
                          id="NO LEGAL ENTITY"
                          value="NO LEGAL ENTITY"
                          onChange={handleChange}
                          checked={formD.Ownership_Pattern == "NO LEGAL ENTITY"}
                        />
                      </div>
                    </div>
                    {a2 != "show2" ? (
                      ""
                    ) : (
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <span>If Yes, % ownership of female </span>
                        <input
                          style={{ minWidth: "20px" }}
                          type="number"
                          id="ownership_female_partnership"
                          name="ownership_female_partnership"
                          onChange={handleChange}
                          value={formD.ownership_female_partnership}
                        />
                      </tr>
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>Are you a part of any Cluster? </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Clusteryes">YES</label>
                        <input
                          type="radio"
                          onClick={() => setA3("Yes")}
                          name="Cluster"
                          id="Clusteryes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Cluster == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Clusterno">NO</label>
                        <input
                          type="radio"
                          onClick={() => setA3("No")}
                          name="Cluster"
                          id="Clusterno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Cluster == "NO"}
                        />
                      </div>
                    </div>
                    {a3 == "Yes" ? (
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <span>If Yes, which one? How many units are there</span>
                        <input
                          style={{ minWidth: "20px" }}
                          type="text"
                          id="Cluster_Yes"
                          name="Cluster_Yes"
                          onChange={handleChange}
                          value={formD.Cluster_Yes}
                        />
                      </tr>
                    ) : (
                      ""
                    )}
                    {a3 == "No" ? (
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <span>If No, Why? </span>
                        <input
                          style={{ minWidth: "20px", marginBottom: "12px" }}
                          type="text"
                          id="Cluster_No"
                          name="Cluster_No"
                          onChange={handleChange}
                          value={formD.Cluster_No}
                        />
                      </tr>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      Do you use computer software for accounting or managing
                      finances?
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="use_computeryes">YES</label>
                        <input
                          type="radio"
                          name="use_computer"
                          id="use_computeryes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.use_computer == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="use_computerno">NO</label>
                        <input
                          type="radio"
                          name="use_computer"
                          id="use_computerno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.use_computer == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>What are the top 3 products you offer? </span>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="TOP_THREE_PRODUCTS-1">1.</label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="TOP_THREE_PRODUCTS-1"
                        name="TOP_THREE_PRODUCTS"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="TOP_THREE_PRODUCTS-2">2.</label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="TOP_THREE_PRODUCTS-2"
                        name="TOP_THREE_PRODUCTS"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="TOP_THREE_PRODUCTS-3">3.</label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="TOP_THREE_PRODUCTS-3"
                        name="TOP_THREE_PRODUCTS"
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      Where all do you sell your produce/products majorly?
                      Please tick (✓) all the relevant options{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper" id="ownership_pattern">
                      <div>
                        <label htmlFor="local">Local Market/ trader</label>
                        <input
                          type="checkbox"
                          name="sell_produce_majorly"
                          id="local"
                          value="Local_Market"
                          checked={formD.sell_produce_majorly.Local_Market}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="Govt">Government (State/Central)</label>
                        <input
                          type="checkbox"
                          id="Govt"
                          name="sell_produce_majorly"
                          value="Government"
                          checked={formD.sell_produce_majorly.Government}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="online">Online Platform</label>
                        <input
                          type="checkbox"
                          id="online"
                          name="sell_produce_majorly"
                          value="online"
                          checked={formD.sell_produce_majorly.online}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="other">Other states in India </label>
                        <input
                          type="checkbox"
                          id="other"
                          name="sell_produce_majorly"
                          value="Other_states"
                          checked={formD.sell_produce_majorly.Other_states}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="export">Export outside India</label>
                        <input
                          type="checkbox"
                          id="export"
                          name="sell_produce_majorly"
                          value="export_outside"
                          checked={formD.sell_produce_majorly.export_outside}
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        style={{
                          width: "100%",
                          gap: "15px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                        }}
                      >
                        <label htmlFor="others">Other please specify</label>
                        <input
                          type="text"
                          id="others"
                          name="sell_produce_majorly"
                          onChange={handleChange}
                          value={formD.sell_produce_majorly.other}
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      In case of Service Industry, your services are offered to{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper" id="ownership_pattern">
                      <div>
                        <label htmlFor="local1">Local Market/ trader</label>
                        <input
                          type="checkbox"
                          name="service_industry"
                          id="local1"
                          value="Local_Market"
                          checked={formD.service_industry.Local_Market}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="Govt1">
                          Government (State/Central)
                        </label>
                        <input
                          type="checkbox"
                          id="Govt1"
                          name="service_industry"
                          value="Government"
                          checked={formD.service_industry.Government}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="online1">Online Platform</label>
                        <input
                          type="checkbox"
                          id="online1"
                          name="service_industry"
                          value="online"
                          checked={formD.service_industry.online}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="other1">Other states in India </label>
                        <input
                          type="checkbox"
                          id="other1"
                          name="service_industry"
                          value="Other_states"
                          checked={formD.service_industry.Other_states}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="export1">Internationally</label>
                        <input
                          type="checkbox"
                          id="export1"
                          name="service_industry"
                          value="internationally"
                          checked={formD.service_industry.internationally}
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        style={{
                          width: "100%",
                          gap: "15px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                        }}
                      >
                        <label htmlFor="others1">Other please specify</label>
                        <input
                          type="text"
                          id="others1"
                          name="service_industry"
                          onChange={handleChange}
                          value={formD.service_industry.other}
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>No of Employees ( or % )</span>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="full_time_Emoployee-1">Full time: </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="full_time_Emoployee-1"
                        name="full_time_Emoployee"
                        onChange={handleChange}
                        value={formD.full_time_Emoployee}
                      />
                    </div>
                    <div>
                      <label htmlFor="part_time_Emoployee-2">Part time: </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="part_time_Emoployee-2"
                        name="part_time_Emoployee"
                        onChange={handleChange}
                        value={formD.part_time_Emoployee}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="Permanent_Emoployee-1">Permanent: </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="Permanent_Emoployee-1"
                        name="Permanent_Emoployee"
                        onChange={handleChange}
                        value={formD.Permanent_Emoployee}
                      />
                    </div>
                    <div>
                      <label htmlFor="Contractual_Emoployee-2">
                        Contractual:{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="Contractual_Emoployee-2"
                        name="Contractual_Emoployee"
                        onChange={handleChange}
                        value={formD.Contractual_Emoployee}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="male_employee-1">Male: </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="male_employee-1"
                        name="male_employee"
                        onChange={handleChange}
                        value={formD.male_employee}
                      />
                    </div>
                    <div>
                      <label htmlFor="female_employee-2">Female: </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="female_employee-2"
                        name="female_employee"
                        onChange={handleChange}
                        value={formD.female_employee}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>Major Source of your Financing (or %) </span>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="formal_source-1">
                        Formal Sources(Bank/NBFCs etc):{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="formal_source-1"
                        name="formal_source"
                        onChange={handleChange}
                        value={formD.formal_source}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="informal_source-1">
                        Informal Sources(friends/relatives//money lenders):{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="informal_source-1"
                        name="informal_source"
                        onChange={handleChange}
                        value={formD.informal_source}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="internal_fund_generation-1">
                        Internal fund generation/Own sources:{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="internal_fund_generation-1"
                        name="internal_fund_generation"
                        onChange={handleChange}
                        value={formD.internal_fund_generation}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="other_financing_source-1">
                        Other, please specify{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="other_financing_source-1"
                        name="other_financing_source"
                        onChange={handleChange}
                        value={formD.other_financing_source}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Whether loan availed </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="loan_availedyes">YES</label>
                        <input
                          type="radio"
                          name="loan_availed"
                          id="loan_availedyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.loan_availed == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="loan_availedno">NO</label>
                        <input
                          type="radio"
                          name="loan_availed"
                          id="loan_availedno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.loan_availed == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="loan_specification">
                      Please specify, Term Loan / Working Capital / Both{" "}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="text"
                      id="loan_specification"
                      name="loan_specification"
                      onChange={handleChange}
                      value={formD.loan_specification}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Whether Loan is adequate for your operations?</span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="loan_adequateyes">YES</label>
                        <input
                          type="radio"
                          onClick={() => setA4("show4")}
                          name="loan_adequate"
                          id="loan_adequateyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.loan_adequate == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="loan_adequateno">NO</label>
                        <input
                          type="radio"
                          onClick={() => setA4(null)}
                          name="loan_adequate"
                          id="loan_adequateno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.loan_adequate == "NO"}
                        />
                      </div>
                    </div>
                    {a4 != "show4" ? (
                      ""
                    ) : (
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <span>
                          If not, please indicate the amount of loan required
                          for both term loan and working capital loan{" "}
                        </span>
                        <input
                          style={{ minWidth: "20px", marginBottom: "12px" }}
                          type="number"
                          id="loan_required"
                          name="loan_required"
                          onChange={handleChange}
                          value={formD.loan_required}
                        />
                      </tr>
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      Did you avail any credit facility in the last 12 months?{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="availed_loan_last_yearyes">YES</label>
                        <input
                          type="radio"
                          onClick={() => setA5("show5")}
                          name="availed_loan_last_year"
                          id="availed_loan_last_yearyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.availed_loan_last_year == "YES"}
                        />
                      </div>

                      <div>
                        <label htmlFor="availed_loan_last_yearno">NO</label>
                        <input
                          type="radio"
                          onClick={() => setA5(null)}
                          name="availed_loan_last_year"
                          id="availed_loan_last_yearno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.availed_loan_last_year == "NO"}
                        />
                      </div>
                    </div>
                    {a5 != "show5" ? (
                      ""
                    ) : (
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <span>If Yes, then amount and bank/lender </span>
                        <input
                          style={{ minWidth: "20px", marginBottom: "12px" }}
                          type="text"
                          id="availed_loan_amount"
                          name="availed_loan_amount"
                          onChange={handleChange}
                          value={formD.availed_loan_amount}
                        />
                      </tr>
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      Any innovation or R&D undertaken on your own or in
                      collaboration/support from some institute?{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="innovation_RDyes">YES</label>
                        <input
                          type="radio"
                          onClick={() => setA6("show6")}
                          name="innovation_RD"
                          id="innovation_RDyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.innovation_RD == "YES"}
                        />
                      </div>

                      <div>
                        <label htmlFor="innovation_RDno">NO</label>
                        <input
                          type="radio"
                          onClick={() => setA6(null)}
                          name="innovation_RD"
                          id="innovation_RDno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.innovation_RD == "NO"}
                        />
                      </div>
                    </div>
                    {a6 != "show6" ? (
                      ""
                    ) : (
                      <tr
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <span>If yes, which one? </span>
                        <input
                          style={{ minWidth: "20px", marginBottom: "12px" }}
                          type="text"
                          id="innovation_RD_institute"
                          name="innovation_RD_institute"
                          onChange={handleChange}
                          value={formD.innovation_RD_institute}
                        />
                      </tr>
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      Have you taken any support from Govt agency / scheme{" "}
                    </span>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="govt_scheme-1">Scheme: </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="govt_scheme-1"
                        name="govt_scheme"
                        onChange={handleChange}
                        value={formD.govt_scheme}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="govt_program-1">Program: </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="govt_program-1"
                        name="govt_program"
                        onChange={handleChange}
                        value={formD.govt_program}
                      />
                    </div>
                  </td>
                  <td
                    className="input_label_gapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    colSpan={6}
                  >
                    <div>
                      <label htmlFor="govt_organisation-1">
                        Name of Organisation:{" "}
                      </label>
                      <input
                        style={{ width: "95%" }}
                        type="text"
                        id="govt_organisation-1"
                        name="govt_organisation"
                        onChange={handleChange}
                        value={formD.govt_organisation}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      Do you have PAN card on the name of your company?{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="pan_card_companyyes">YES</label>
                        <input
                          type="radio"
                          name="pan_card_company"
                          id="pan_card_companyyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.pan_card_company == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="pan_card_companyno">NO</label>
                        <input
                          type="radio"
                          name="pan_card_company"
                          id="pan_card_companyno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.pan_card_company == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Do you have GST No.? </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="GST_NOyes">YES</label>
                        <input
                          type="radio"
                          name="GST_NO"
                          id="GST_NOyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.GST_NO == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="GST_NOno">NO</label>
                        <input
                          type="radio"
                          name="GST_NO"
                          id="GST_NOno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.GST_NO == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Do you have a Current Bank Account ? </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Current_Bank_Accountyes">YES</label>
                        <input
                          type="radio"
                          name="Current_Bank_Account"
                          id="Current_Bank_Accountyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Current_Bank_Account == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Current_Bank_Accountno">NO</label>
                        <input
                          type="radio"
                          name="Current_Bank_Account"
                          id="Current_Bank_Accountno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Current_Bank_Account == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      Do you have CA audited financial statement for Last FY
                      2021-2022{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="have_CA_audited_financial_statementyes">
                          YES
                        </label>
                        <input
                          type="radio"
                          name="have_CA_audited_financial_statement"
                          id="have_CA_audited_financial_statementyes"
                          value="YES"
                          onChange={handleChange}
                          checked={
                            formD.have_CA_audited_financial_statement == "YES"
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="have_CA_audited_financial_statementno">
                          NO
                        </label>
                        <input
                          type="radio"
                          name="have_CA_audited_financial_statement"
                          id="have_CA_audited_financial_statementno"
                          value="NO"
                          onChange={handleChange}
                          checked={
                            formD.have_CA_audited_financial_statement == "NO"
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Annual_Turnover">
                      Annual Turnover (Avg last 3 years)
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Annual_Turnover"
                      name="Annual_Turnover"
                      onChange={handleChange}
                      value={formD.Annual_Turnover}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Investment_plant_machinery">
                      Investment in plant & machinery (Avg last 3 years)
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Investment_plant_machinery"
                      name="Investment_plant_machinery"
                      onChange={handleChange}
                      value={formD.Investment_plant_machinery}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Investment_IT_Infrastructure">
                      Investment in IT Infrastructure (Avg in Last 3 Years)
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Investment_IT_Infrastructure"
                      name="Investment_IT_Infrastructure"
                      onChange={handleChange}
                      value={formD.Investment_IT_Infrastructure}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Do you Export ? </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="You_Exportyes">YES</label>
                        <input
                          type="radio"
                          name="You_Export"
                          id="You_Exportyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.You_Export == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="You_Exportno">NO</label>
                        <input
                          type="radio"
                          name="You_Export"
                          id="You_Exportno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.You_Export == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Export_Value">
                      Export value (avg in last 3 yrs){" "}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Export_Value"
                      name="Export_Value"
                      onChange={handleChange}
                      value={formD.Export_Value}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Overall_Annual_production">
                      Overall Annual Production:{" "}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Overall_Annual_production"
                      name="Overall_Annual_production"
                      onChange={handleChange}
                      value={formD.Overall_Annual_production}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Electric_Availability_Hours">
                      Electricity availability for how many hours?{" "}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Electric_Availability_Hours"
                      name="Electric_Availability_Hours"
                      onChange={handleChange}
                      value={formD.Electric_Availability_Hours}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Electricity_rate_Per_Unit">
                      Electricity rate per unit{" "}
                    </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Electricity_rate_Per_Unit"
                      name="Electricity_rate_Per_Unit"
                      onChange={handleChange}
                      value={formD.Electricity_rate_Per_Unit}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Is water availability a constraint? </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Water_Availabilityyes">YES</label>
                        <input
                          type="radio"
                          name="Water_Availability"
                          id="Water_Availabilityyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Water_Availability == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Water_Availabilityno">NO</label>
                        <input
                          type="radio"
                          name="Water_Availability"
                          id="Water_Availabilityno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Water_Availability == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span> Is there a constraint for Effluent Treatment? </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Effluent_Treatment_Constraintyes">
                          YES
                        </label>
                        <input
                          type="radio"
                          name="Effluent_Treatment_Constraint"
                          id="Effluent_Treatment_Constraintyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Effluent_Treatment_Constraint == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Effluent_Treatment_Constraintno">
                          NO
                        </label>
                        <input
                          type="radio"
                          name="Effluent_Treatment_Constraint"
                          id="Effluent_Treatment_Constraintno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Effluent_Treatment_Constraint == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <span>
                      {" "}
                      Did you undergo any training activities or attend
                      seminars/awareness program of the Govt. for MSME Sector?{" "}
                    </span>
                  </td>
                  <td colSpan={6}>
                    <div className="radio_wrapper">
                      <div>
                        <label htmlFor="Current_Bank_Accountyes">YES</label>
                        <input
                          type="radio"
                          name="Current_Bank_Account"
                          id="Current_Bank_Accountyes"
                          value="YES"
                          onChange={handleChange}
                          checked={formD.Current_Bank_Account == "YES"}
                        />
                      </div>
                      <div>
                        <label htmlFor="Current_Bank_Accountno">NO</label>
                        <input
                          type="radio"
                          name="Current_Bank_Account"
                          id="Current_Bank_Accountno"
                          value="NO"
                          onChange={handleChange}
                          checked={formD.Current_Bank_Account == "NO"}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Email">Email : </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      onChange={handleChange}
                      value={formD.Email}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1}>
                    <label htmlFor="Phone_Number">Phone No. : </label>
                  </td>
                  <td colSpan={6}>
                    <input
                      type="number"
                      id="Phone_Number"
                      name="Phone_Number"
                      onChange={handleChange}
                      value={formD.Phone_Number}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ marginTop: "1em" }}>
          <NavLink to="/2" className="arrow_notation">
            Next
          </NavLink>
        </div>
        {/* <FormPart2 />
        <FormPart3 />
        <FormPart4 />
        <FormPart5 />
      <FormPart6 /> */}
      </form>
    </>
  );
}

export default Table;
