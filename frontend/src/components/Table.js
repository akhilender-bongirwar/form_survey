import React, { useEffect, useState, useRef } from "react";
import "./Table.css";
import Input from "./Input";
import { Form } from "react-router-dom";
import FormPart3 from "./FormPart3";
import axios from "axios";
import FormPart2 from "./FormPart2";
import FormPart4 from "./FormPart4";
import FormPart5 from "./FormPart5";
import FormPart6 from "./FormPart6";
export async function dataaction({ request }) {
  const formData = await request.formData();
  const submission = {
    Enterprise_Name: formData.get("Enterprise_Name"),
    Entrepreneur_Name: formData.get("Entrepreneur_Name"),
    Sex: formData.get("Sex"),
    Category: formData.get("Category"),
    Address: formData.get("Address"),
    Firm_Registered: formData.get("Firm_Registered"),
    Udyam_Registration: formData.get("Udyam_Registration"),
    UAM_UEM_Number: formData.get("UAM_UEM_Number"),
    Year_of_Establishment: formData.get("Year_of_Establishment"),
    Type_of_Business: formData.get("Type_of_Business"),
    Operations_seasonal: formData.get("Operations_seasonal"),
    months_of_operation: formData.get("months_of_operation"),
    Ownership_Pattern: formData.get("Ownership_Pattern"),
    Cluster: formData.get("Cluster"),
    IF_YES_HOW_MANY_UNITS: formData.get("IF_YES_HOW_MANY_UNITS"),
    use_computer: formData.get("use_computer"),
    TOP_THREE_PRODUCTS: [
      formData.get("TOP_THREE_PRODUCTS-1"),
      formData.get("TOP_THREE_PRODUCTS-2"),
      formData.get("TOP_THREE_PRODUCTS-3"),
    ],
    // sell_produce_majorly:formData.get("sell_produce_majorly"),
    // service_industry: formData.get("service_industry"),
    full_time_Emoployee: formData.get("full_time_Emoployee"),
    part_time_Emoployee: formData.get("part_time_Emoployee"),
    Permanent_Emoployee: formData.get("Permanent_Emoployee"),
    Contractual_Emoployee: formData.get("Contractual_Emoployee"),
    male_employee: formData.get("male_employee"),
    female_employee: formData.get("female_employee"),
    formal_source: formData.get("formal_source"),
    informal_source: formData.get("informal_source"),
    internal_fund_generation: formData.get("internal_fund_generation"),
    other_source: formData.get("other_source"),
    loan_availed: formData.get("loan_availed"),
    loan_specification: formData.get("loan_specification"),
    loan_adequate: formData.get("loan_adequate"),
    loan_required: formData.get("loan_required"),
    availed_loan_last_year: formData.get("availed_loan_last_year"),
    availed_loan_amount: formData.get("availed_loan_amount"),
    innovation_RD: formData.get("innovation_RD"),
    innovation_RD_institute: formData.get("innovation_RD_institute"),
    govt_scheme: formData.get("govt_scheme"),
    govt_program: formData.get("govt_program"),
    govt_organisation: formData.get("govt_organisation"),
    pan_card_company: formData.get("pan_card_company"),
    GST_NO: formData.get("GST_NO"),
    Current_Bank_Account: formData.get("Current_Bank_Account"),
    have_CA_audited_financial_statement: formData.get(
      "have_CA_audited_financial_statement"
    ),
    Annual_Turnover: formData.get("Annual_Turnover"),
    Investment_plant_machinery: formData.get("Investment_plant_machinery"),
    Investment_IT_Infrastructure: formData.get("Investment_IT_Infrastructure"),
    You_Export: formData.get("You_Export"),
    Export_Value: formData.get("Export_Value"),
    Overall_Annual_production: formData.get("Overall_Annual_production"),
    Electric_Availability_Hours: formData.get("Electric_Availability_Hours"),
    Electricity_rate_Per_Unit: formData.get("Electricity_rate_Per_Unit"),
    Water_Availability: formData.get("Water_Availability"),
    Effluent_Treatment_Constraint: formData.get(
      "Effluent_Treatment_Constraint"
    ),
    GOVT_Training: formData.get("GOVT_Training"),
    Email: formData.get("Email"),
    Phone_Number: formData.get("Phone_Number"),
    Raw_Materials: formData.get("Raw_Materials"),
    if_Raw_Materials_available: formData.get("if_Raw_Materials_available"),
    if_no_mention_difficulties: formData.get("if_no_mention_difficulties"),
    green_tech: formData.get("green_tech"),
    environment_clearence: formData.get("environment_clearence"),
    final_product_sold_to: formData.getAll("final_product_sold_to"),
    markets_supplied: formData.get("markets_supplied"),
    have_product_brand_name: formData.get("have_product_brand_name"),
    Brand_name: formData.get("Brand_name"),
    challenges_while_selling: formData.get("challenges_while_selling"),
    involved_in_marketing: formData.get("involved_in_marketing"),
    options_you_leverage_for_sale: formData.getAll(
      "options_you_leverage_for_sale:"
    ),
    Quality_Testing_lab_available: formData.get(
      "Quality_Testing_lab_available"
    ),
    labour_and_training: formData.get("labour_and_training"),
    skilled_labour_is_required: formData.get("skilled_labour_is_required"),
    Nature_of_Services_Offered: formData.getAll("Nature_of_Services_Offered"),
    Challenges_faced: formData.getAll("Challenges_faced"),

    Govt_Scheme_Challenges: formData.get("Govt_Scheme_Challenges"),
    Support_required: formData.get("Support_required"),
    aware_of_govt_policy: formData.get("aware_of_govt_policy"),
    Policy_benifitted: formData.getAll("Policy_benifitted"),
    Benifits_of_policy: formData.get("Policy_benifitted"),
    Challenges_faced_policy_related: formData.get(
      "Challenges_faced_policy_related"
    ),
    expectation_from_govt: formData.getAll("expectation_from_govt"),
    Aware_of_listed_scehmes: {
      Central_Govt: formData.getAll("Central_Govt"),
      State_Govt: formData.getAll("State_Govt"),
    },
    Remarks: formData.get("Remarks"),
    Scheme_Like_to_avail: {
      Central_Govt: formData.getAll("Central_Govt2"),
      State_Govt: formData.getAll("State_Govt2"),
    },
    scheme_availed_by_you_central_govt: formData.get(
      "scheme_availed_by_you_central_govt"
    ),
    scheme_availed_by_you_state_govt: formData.get(
      "scheme_availed_by_you_state_govt"
    ),
    Key_Reason_Preventing_loan: formData.getAll("Key_Reason_Preventing_loan"),
    source_of_credit_form: formData.get("source_of_credit_form"),
    applied_loan_outcome: formData.getAll("applied_loan_outcome"),
    reason_of_rejection: formData.get("reason_of_rejection"),
    availed_samadhaan_service: formData.get("availed_samadhaan_service"),
    face_challenge_from_buyer: formData.get("face_challenge_from_buyer"),
    Questionnaire_For_Exporters: {
      Certifications: {
        Currently_owned_1: formData.get("Currently_owned_1"),
        To_be_Required_1: formData.get("To_be_Required_1"),
      },
      Infrastructure: {
        Currently_owned_2: formData.get("Currently_owned_2"),
        To_be_Required_2: formData.get("To_be_Required_2"),
      },
      Laboratory: {
        Currently_owned_3: formData.get("Currently_owned_3"),
        To_be_Required_3: formData.get("To_be_Required_3"),
      },
    },
    Certification_required: formData.get("Certification_required"),
    laboratory_requirement: formData.get("laboratory_requirement"),
    Requirement_of_Soft_Interventions: {
      Counselling: formData.get("Counselling"),
      Upgradation_of_IT_Infrastructure: formData.get(
        "Upgradation_of_IT_Infrastructure"
      ),
      Participation_in_Training: formData.get("Participation_in_Training"),
      Institution_Development: formData.get("Institution_Development"),
      Implementation_of_new_software: formData.get(
        "Implementation_of_new_software"
      ),
      Training_Process_Improvement: formData.get(
        "Training_Process_Improvement"
      ),
      Market_Promotion_Initiatives: formData.get(
        "Market_Promotion_Initiatives"
      ),
      Design_and_product_development: formData.get(
        "Design_and_product_development"
      ),
      Promotion_Campaign: formData.get("Promotion_Campaign"),
    },
  };

  console.log(submission);
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
  return null;
}

function Table() {
  const [a1, setA1] = useState(null);
  const [a2, setA2] = useState(null);
  const [a3, setA3] = useState(null);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>DRAFT SURVEY FORM</h1>
      <Form method="post">
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
            {/* <h2 style={{ marginLeft: "0.8em", padding: "2%" }}>
              {("A. MSME Specific Questionairre")}
            </h2> */}
            <table style={{ width: "100%", overflowWrap: "break-word" }}>
              <th colSpan={6}>{"A. MSME Specific Questionairre"}</th>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Enterprise_Name">{"Enterprise name"}</label>
                </td>
                <td colSpan={6}>
                  <input
                    type="text"
                    id="Enterprise_Name"
                    name="Enterprise_Name"
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
                      <input type="radio" name="Sex" id="M" value="male" />
                    </div>
                    <div>
                      <label htmlFor="F">F</label>
                      <input type="radio" name="Sex" id="F" value="female" />
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
                      <input type="radio" name="Category" id="SC" value="SC" />
                    </div>
                    <div>
                      <label htmlFor="ST">ST</label>
                      <input type="radio" name="Category" id="ST" value="ST" />
                    </div>
                    <div>
                      <label htmlFor="OBC">OBC</label>
                      <input
                        type="radio"
                        name="Category"
                        id="OBC"
                        value="OBC"
                      />
                    </div>
                    <div>
                      <label htmlFor="Minority">Minority</label>
                      <input
                        type="radio"
                        name="Category"
                        id="Minority"
                        value="Minority"
                      />
                    </div>
                    <div>
                      <label htmlFor="General">General</label>
                      <input
                        type="radio"
                        name="Category"
                        id="General"
                        value="General"
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
                  <input type="text" id="Address" name="Address" />
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <label htmlFor="Website">{"Website:"}</label>
                </td>
                <td colSpan={6}>
                  <input type="text" id="Website" name="Website" />
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
                      />
                    </div>
                    <div>
                      <label htmlFor="Firm_Registeredno">NO</label>
                      <input
                        type="radio"
                        name="Firm_Registered"
                        id="Firm_Registeredno"
                        value="NO"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <span> Do you have Udhyog Aadhar / Udyam Registration </span>
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
                      />
                    </div>
                    <div>
                      <label htmlFor="Udyam_Registrationno">NO</label>
                      <input
                        type="radio"
                        name="Udyam_Registration"
                        id="Udyam_Registrationno"
                        value="NO"
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
                      />
                    </div>
                    <div>
                      <label htmlFor="service">Service</label>
                      <input
                        type="radio"
                        name="Type_of_Business"
                        id="service"
                        value="service"
                      />
                    </div>
                    <div>
                      <label htmlFor="trading">Trading</label>
                      <input
                        type="radio"
                        name="Type_of_Business"
                        id="trading"
                        value="trading"
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
                          style={{ minWidth: "20px" }}
                          type="number"
                          id="months_of_operation"
                          name="months_of_operation"
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
                  <div className="radio_wrapper">
                    <div>
                      <label htmlFor="proprietary">Proprietary</label>
                      <input
                        type="radio"
                        name="Ownership_Pattern"
                        onClick={() => setA2(null)}
                        id="proprietary"
                        value="proprietary"
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
                        style={{ minWidth: "20px" }}
                        type="text"
                        id="Cluster_No"
                        name="Cluster_No"
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
                      />
                    </div>
                    <div>
                      <label htmlFor="use_computerno">NO</label>
                      <input
                        type="radio"
                        name="use_computer"
                        id="use_computerno"
                        value="NO"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <span>What are the top 3 products you offer? </span>
                </td>
                <td colSpan={6}>
                  <div>
                    <label htmlFor="TOP_THREE_PRODUCTS-1">1.</label>
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      id="TOP_THREE_PRODUCTS-1"
                      name="TOP_THREE_PRODUCTS"
                    />
                  </div>
                  <div>
                    <label htmlFor="TOP_THREE_PRODUCTS-2">2.</label>
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      id="TOP_THREE_PRODUCTS-2"
                      name="TOP_THREE_PRODUCTS"
                    />
                  </div>
                  <div>
                    <label htmlFor="TOP_THREE_PRODUCTS-3">3.</label>
                    <input
                      style={{ width: "90%" }}
                      type="text"
                      id="TOP_THREE_PRODUCTS-3"
                      name="TOP_THREE_PRODUCTS"
                    />
                  </div>
                </td>
              </tr>
            </table>
            {/* <div className="div-style">
              <label htmlFor="Enterprise_Name" className="inner-div-tag">
                Enterprise name
              </label>
              <input
                
                id="enterprise"
                name="Enterprise_Name"
                style={{ width: "70%", border: "transparent" }}
              />
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Entrepreneur_Name" className="inner-div-tag">
                Entrepreneur name
              </label>
              <input
                type="text"
                id="Entrepreneur_Name"
                name="Entrepreneur_Name"
                style={{ width: "75%", border: "transparent" }}
              />
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                <span>Sex:</span>
                <div style={{ display: "flex", padding: "0.5vw" }}>
                  <input type="radio" name="Sex" value="male"/>M
                  <input type="radio" name="Sex" value="female"/>F
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2%",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    marginRight: "0.1%",
                    alignSelf: "center",
                  }}
                >
                  Category
                </div>
                <div>
                  <label htmlFor="SC" style={{ fontWeight: "500" }}>
                    SC
                  </label>
                  <input type="radio" id="SC" name="Category" value="SC" />
                </div>
                <div>
                  <label htmlFor="ST" style={{ fontWeight: "500" }}>
                    ST
                  </label>
                  <input type="radio" id="ST" name="Category" value="ST" />
                </div>
                <div>
                  <label htmlFor="OBC" style={{ fontWeight: "500" }}>
                    OBC
                  </label>
                  <input type="radio" id="OBC" name="Category" value="OBC" />
                </div>
                <div>
                  <label htmlFor="Minority" style={{ fontWeight: "500" }}>
                    Minority
                  </label>
                  <input
                    type="radio"
                    id="Minority"
                    name="Category"
                    value="Minority"
                  />
                </div>
                <div>
                  <label htmlFor="General" style={{ fontWeight: "500" }}>
                    General
                  </label>
                  <input
                    type="radio"
                    id="General"
                    name="Category"
                    value="General"
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Address" className="inner-div-tag">
                Address:
              </label>
              <input
                type="text"
                id="Address"
                name="Address"
                style={{ width: "70%", border: "transparent" }}
              />
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Website" className="inner-div-tag">
                Website:{" "}
              </label>
              <input
                type="text"
                id="Website"
                name="Website"
                style={{ width: "70%", border: "transparent" }}
              />
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">Is your firm registerd? </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label
                    htmlFor="Firm_Registered"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="Firm_Registered"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Firm_Registered"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    type="radio"
                    name="Firm_Registered"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Do you have Udhyog Aadhar / Udyam Registration{" "}
              </label>
              <div className="checkboxes">
                <div>
                  <label
                    htmlFor="Udyam_Registration"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="Udyam_Registration"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Udyam_Registration"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    type="radio"
                    name="Udyam_Registration"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="UAM_UEM_Number" className="inner-div-tag">
                UAM /UEM Number:
              </label>
              <input
                type="number"
                name="UAM_UEM_Number"
                id="UAM_UEM_Number"
                style={{
                  display: "flex",
                  flexBasis: "content",
                  border: "transparent",
                  borderRight: "2px solid black",
                }}
              />
              <label htmlFor="Year_of_Establishment" className="inner-div-tag">
                Year of Establishment
              </label>
              <input
                type="number"
                id="Year_of_Establishment"
                name="Year_of_Establishment"
                style={{ width: "25%", border: "transparent" }}
              />
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">Type of Business</label>
              <div>
                <label htmlFor="manufacturing" style={{ fontWeight: "500" }}>
                  Manufacturing
                </label>
                <input
                  type="radio"
                  id="manufacturing"
                  name="Type_of_Business"
                  value="manufacturing"
                  style={{ margin: "0.5%" }}
                />
              </div>
              <div>
                <label htmlFor="service" style={{ fontWeight: "500" }}>
                  Service
                </label>
                <input
                  type="radio"
                  id="service"
                  name="Type_of_Business"
                  value="service"
                  style={{ margin: "0.5%" }}
                />
              </div>
              <div>
                <label htmlFor="trading" style={{ fontWeight: "500" }}>
                  Trading
                </label>
                <input
                  type="radio"
                  id="trading"
                  name="Type_of_Business"
                  value="trading"
                  style={{ margin: "0.5%" }}
                />
              </div>
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="months_of_operation" className="inner-div-tag">
                Whether operations are seasonal in nature?
                <br /> In case seasonal operations, <br /> no. of months of
                operations in a year
              </label>
              <div className="checkboxes">
                <div>
                  <label
                    htmlFor="Operations_seasonal_yes"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    id="Operations_seasonal_yes"
                    type="radio"
                    name="Operations_seasonal"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Operations_seasonal_no"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    id="Operations_seasonal_no"
                    type="radio"
                    name="Operations_seasonal"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <input
                type="Number"
                name="months_of_operation"
                id="months_of_operation"
                style={{ width: "10%", border: "transparent" }}
              />
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">Ownership Pattern:</div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="proprietary">Proprietary</label>
                  <input
                    type="radio"
                    id="proprietary"
                    name="Ownership_Pattern"
                    value="proprietary"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="partnership">Partnership</label>
                  <input
                    type="radio"
                    id="partnership"
                    name="Ownership_Pattern"
                    value="partnership"
                    style={{ margin: "1%" }}
                  />
                  <div className="inner-div-tag">
                    If Yes, <br />% ownership of female . . . . .
                    <input type="number" name="ownership_female_partnership" />
                  </div>
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="private">Private Limited</label>
                  <input
                    type="radio"
                    id="private"
                    name="Ownership_Pattern"
                    value="private"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="LLP">LLP</label>
                  <input
                    type="radio"
                    id="LLP"
                    name="Ownership_Pattern"
                    value="LLP"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="public limited">Public Limited</label>
                  <input
                    type="radio"
                    id="public limited"
                    name="Ownership_Pattern"
                    value="PUBLIC"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{ display: "flex", flexBasis: "content" }}
              >
                <div>
                  <label htmlFor="Nolegal">No Legal Entity</label>
                  <input
                    type="radio"
                    id="Nolegal"
                    name="Ownership_Pattern"
                    value="NO LEGAL ENTITY"
                    style={{ margin: "1%" }}
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                Are you a part of <br />
                any Cluster?{" "}
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="Cluster"
                    value="YES"
                    id="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="Cluster"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <label htmlFor="units" className="inner-div-tag">
                If Yes, which one? <br />
                How many units are there{" "}
              </label>
              <input
                type="text"
                id="units"
                name="IF_YES_HOW_MANY_UNITS"
                placeholder="If No, Why?"
                style={{ width: "30%", border: "transparent" }}
              />
            </div> */}
            {/* <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                Do you use computer <br />
                software for accounting
                <br /> or managing finances?
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="use_computer"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="use_computer"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <label
                htmlFor="units"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "25%",
                  borderRight: "2px solid black",
                }}
              >
                What are the top 3 products you offer?{" "}
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="text"
                  name="TOP_THREE_PRODUCTS-1"
                  placeholder="1. "
                  style={{ width: "80%", border: "transparent" }}
                />
                <input
                  type="text"
                  name="TOP_THREE_PRODUCTS-2"
                  placeholder="2. "
                  style={{ width: "80%", border: "transparent" }}
                />
                <input
                  type="text"
                  name="TOP_THREE_PRODUCTS-3"
                  placeholder="3. "
                  style={{ width: "80%", border: "transparent" }}
                />
              </div>
            </div> */}
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                Where all do you sell your <br /> produce/products majorly?{" "}
                <br />
                Please tick (✓) all the <br />
                relevant options{" "}
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="local">Local Market/ trader</label>
                  <input
                    type="checkbox"
                    name="sell_produce_majorly"
                    id="local"
                    value="Local Market"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="Govt">Government (State/Central)</label>
                  <input
                    type="checkbox"
                    id="Govt"
                    name="sell_produce_majorly"
                    value="Government"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="online">Online Platform</label>
                  <input
                    type="checkbox"
                    id="online"
                    name="sell_produce_majorly"
                    value="online"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="other">Other states in India </label>
                  <input
                    type="checkbox"
                    id="other"
                    name="sell_produce_majorly"
                    value="Other states"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="export">Export outside India</label>
                  <input
                    type="checkbox"
                    id="export"
                    name="sell_produce_majorly"
                    value="export outside"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="others">Other please specify</label>
                  <input
                    type="text"
                    id="others"
                    name="sell_produce_majorly"
                    style={{
                      display: "flex",
                      flexBasis: "content",
                      border: "transparent",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                In case of <br /> Service Industry,
                <br />
                your services are offered to{" "}
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="local">Local Market/ trader</label>
                  <input
                    type="checkbox"
                    name="service_industry"
                    id="local"
                    value="Local Market"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="Govt">Government (State/Central)</label>
                  <input
                    type="checkbox"
                    id="Govt"
                    name="service_industry"
                    value="Government"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="online">Online Platform</label>
                  <input
                    type="checkbox"
                    id="online"
                    name="service_industry"
                    value="online"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="other">Other states in India </label>
                  <input
                    type="checkbox"
                    id="other"
                    name="service_industry"
                    value="Other states"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="export">Internationally</label>
                  <input
                    type="checkbox"
                    id="export"
                    name="service_industry"
                    value="export outside"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  />
                </div>
              </div>
              <div
                className="checkboxes"
                style={{
                  borderRight: "2px solid black",
                  display: "flex",
                  flexBasis: "content",
                }}
              >
                <div>
                  <label htmlFor="others">Other please specify</label>
                  <input
                    type="text"
                    id="others"
                    name="service_industry"
                    style={{
                      display: "flex",
                      flexBasis: "content",
                      border: "transparent",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="website"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                No. of Employees (or %){" "}
              </label>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Full time: </label>
                  <input
                    type="number"
                    name="full_time_Emoployee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
                <div>
                  <label htmlFor="time">Part time: </label>
                  <input
                    type="number"
                    name="part_time_Emoployee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Permanent Emoployee </label>
                  <input
                    type="number"
                    name="Permanent_Emoployee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
                <div>
                  <label htmlFor="time">Contractual Emoployee: </label>
                  <input
                    type="number"
                    name="Contractual_Emoployee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Male Employee </label>
                  <input
                    type="number"
                    name="male_employee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
                <div>
                  <label htmlFor="time">Female Employee </label>
                  <input
                    type="number"
                    name="female_employee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="website"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                Major Source of your Financing (or %){" "}
              </label>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Formal source </label>
                  <input
                    type="number"
                    name="part_time_Emoployee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Permanent Emoployee </label>
                  <input
                    type="number"
                    name="Permanent_Emoployee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
                <div>
                  <label htmlFor="time">Contractual Emoployee: </label>
                  <input
                    type="number"
                    name="Contractual_Emoployee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Male Employee </label>
                  <input
                    type="number"
                    name="male_employee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
                <div>
                  <label htmlFor="time">Female Employee </label>
                  <input
                    type="number"
                    name="female_employee"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="website"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                Major Source of your Financing (or %){" "}
              </label>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Formal source </label>
                  <input
                    type="text"
                    name="formal_source"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Informal Source </label>
                  <input
                    type="text"
                    name="informal_source"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Internal Fund Generation</label>
                  <input
                    type="text"
                    name="internal_fund_generation"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Other, please specify</label>
                  <input
                    type="text"
                    name="other_source"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">Whether loan availed? </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="loan_availed"
                    value="YES"
                    id="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="loan_availed"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <label htmlFor="units" className="inner-div-tag">
                Please specify Term <br />
                Loan/Working Capital/Both{" "}
              </label>
              <input
                type="text"
                id="units"
                name="loan_specification"
                placeholder=""
                style={{ width: "30%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                Whether Loan is adequate for your operations? If not, please
                indicate the amount of loan required for both term loan and
                working capital loan{" "}
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="loan_adequate"
                    value="YES"
                    id="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="loan_adequate"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <input
                type="number"
                id="units"
                name="loan_required"
                placeholder="If not, please indicate loan amount required"
                style={{ width: "30%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                Did you avail any credit facility in the last 12 months?{" "}
              </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="availed_loan_last_year"
                    value="YES"
                    id="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="availed_loan_last_year"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <input
                type="text"
                id="units"
                name="availed_loan_amount"
                placeholder="If Yes, then amount and 
                bank/lender"
                style={{ width: "30%", border: "transparent" }}
              />
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div className="inner-div-tag">
                  Any innovation or R&D undertaken on your own or in
                  collaboration/support from some institute?{" "}
                </div>
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="innovation_RD"
                    value="YES"
                    id="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="innovation_RD"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <input
                type="text"
                id="units"
                name="innovation_RD_institute"
                placeholder="If yes, which 
                one?"
                style={{ width: "30%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="website"
                style={{
                  marginRight: "1% 1.5%",
                  fontWeight: "bold",
                  width: "20%",
                  borderRight: "2px solid black",
                }}
              >
                Have you taken any support from Govt agency / scheme{" "}
              </label>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Scheme </label>
                  <input
                    type="text"
                    name="govt_scheme"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Program </label>
                  <input
                    type="text"
                    name="govt_program"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1%",
                  flexDirection: "column",
                  borderRight: "2px solid black",
                }}
              >
                <div>
                  <label htmlFor="time">Name of Organisation</label>
                  <input
                    type="text"
                    name="govt_organisation"
                    id="time"
                    placeholder=""
                    style={{ width: "50%", border: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Do you have PAN card on the name of your company?{" "}
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label
                    htmlFor="Firm_Registered"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="pan_card_company"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Firm_Registered"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    type="radio"
                    name="pan_card_company"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">Do you have GST No.? </label>
              <div className="checkboxes">
                <div>
                  <label
                    htmlFor="Udyam_Registration"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="GST_NO"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Udyam_Registration"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    type="radio"
                    name="GST_NO"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Do you have a Current Bank Account
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label
                    htmlFor="Firm_Registered"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="Current_Bank_Account"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Firm_Registered"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    type="radio"
                    name="Current_Bank_Account"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Do you have CA audited financial statement for Last FY 2021-2022{" "}
              </label>
              <div className="checkboxes">
                <div>
                  <label
                    htmlFor="Udyam_Registration"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="have_CA_audited_financial_statement"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Udyam_Registration"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    type="radio"
                    name="have_CA_audited_financial_statement"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Annual_Turnover" className="inner-div-tag">
                Annual Turnover (Avg last 3 years)
              </label>
              <input
                type="number"
                name="Annual_Turnover"
                id="Annual_Turnover"
                style={{
                  display: "flex",
                  flexBasis: "content",
                  border: "transparent",
                  borderRight: "2px solid black",
                }}
              />
              <label
                htmlFor="Investment_plant_machinery"
                className="inner-div-tag"
              >
                Investment in plant & machinery (Avg last 3 years)
              </label>
              <input
                type="number"
                id="Investment_plant_machinery"
                name="Investment_plant_machinery"
                style={{ width: "25%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="Investment_IT_Infrastructure"
                className="inner-div-tag"
              >
                Investment in IT Infrastructure (Avg in Last 3 Years)
              </label>
              <input
                type="number"
                id="Investment_IT_Infrastructure"
                name="Investment_IT_Infrastructure"
                style={{ width: "25%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">Do you export (Yes/ No) </div>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label htmlFor="yes" style={{ fontWeight: "500" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="You_Export"
                    value="YES"
                    id="yes"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label htmlFor="no" style={{ fontWeight: "500" }}>
                    No
                  </label>
                  <input
                    type="radio"
                    name="You_Export"
                    value="NO"
                    id="no"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
              <label htmlFor="Export_Value" className="inner-div-tag">
                Export value (avg in last 3 yrs){" "}
              </label>
              <input
                type="number"
                id="Export_Value"
                name="Export_Value"
                placeholder=""
                style={{ width: "30%", border: "transparent" }}
              />
              <label
                htmlFor="Overall_Annual_production"
                className="inner-div-tag"
              >
                Overall Annual Production:{" "}
              </label>
              <input
                type="number"
                id="Overall_Annual_production"
                name="Overall_Annual_production"
                placeholder=""
                style={{ width: "30%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label
                htmlFor="Electric_Availability_Hours"
                className="inner-div-tag"
              >
                Electricity availability for how many hours?
              </label>
              <input
                type="number"
                name="Electric_Availability_Hours"
                id="Electric_Availability_Hours"
                style={{
                  display: "flex",
                  flexBasis: "content",
                  border: "transparent",
                  borderRight: "2px solid black",
                }}
              />
              <label
                htmlFor="Electricity_rate_Per_Unit"
                className="inner-div-tag"
              >
                Electricity rate Per Unit?
              </label>
              <input
                type="number"
                id="Electricity_rate_Per_Unit"
                name="Electricity_rate_Per_Unit"
                style={{ width: "25%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Is Water availability a constraint?
              </label>
              <div
                className="checkboxes"
                style={{ borderRight: "2px solid black" }}
              >
                <div>
                  <label
                    htmlFor="Water_Availability"
                    style={{ fontWeight: "500" }}
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="Water_Availability"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Firm_Registered"
                    style={{ fontWeight: "500" }}
                  >
                    No
                  </label>
                  <input
                    type="radio"
                    name="Water_Availability"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Is there a constraint for Effluent Treatment?{" "}
              </label>
              <div className="checkboxes">
                <div>
                  <label style={{ fontWeight: "500" }}>Yes</label>
                  <input
                    type="radio"
                    name="Effluent_Treatment_Constraint"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: "500" }}>No</label>
                  <input
                    type="radio"
                    name="Effluent_Treatment_Constraint"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label className="inner-div-tag">
                Did you undergo any training activities or attend
                seminars/awareness program of the Govt. for MSME Sector?{" "}
              </label>
              <div className="checkboxes">
                <div>
                  <label style={{ fontWeight: "500" }}>Yes</label>
                  <input
                    type="radio"
                    name="GOVT_Training"
                    value="YES"
                    style={{ margin: "0.5%" }}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: "500" }}>No</label>
                  <input
                    type="radio"
                    name="GOVT_Training"
                    value="NO"
                    style={{ margin: "0.5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Email" className="inner-div-tag">
                Email:
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                style={{
                  display: "flex",
                  flexBasis: "content",
                  border: "transparent",
                  borderRight: "2px solid black",
                }}
              />
              <label htmlFor="Phone_Number" className="inner-div-tag">
                Phone No.
              </label>
              <input
                type="number"
                id="Phone_Number"
                name="Phone_Number"
                style={{ width: "25%", border: "transparent" }}
              />
            </div>
            {/* <FormPart2 /> */}
            {/* <FormPart3 /> */}
            {/* <FormPart4 /> */}
            <FormPart5 />
            {/* <FormPart6 /> */}

            <button type="submit">submit</button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Table;
