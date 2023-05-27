import React from "react";
import "./Table.css";
import Input from "./Input";
import { Form } from "react-router-dom";
import FormPart2 from "./FormPart2";
import axios from "axios";
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
  };
  console.log(submission);
  axios
    .post("http://localhost:8080/form-data", {
      body: submission,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return null;
}

function Table() {
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
              width: "70vw",
              flexWrap: "wrap",
              overflowWrap: "break-word",
              borderBottom: "0",
            }}
          >
            <h2 style={{ marginLeft: "0.8em", padding: "2%" }}>
              A. MSME Specific Questionairre
            </h2>
            <div className="div-style">
              <label htmlFor="Enterprise_Name" className="inner-div-tag">
                Enterprise name
              </label>
              <input
                type="text"
                id="enterprise"
                name="Enterprise_Name"
                style={{ width: "70%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Entrepreneur_Name" className="inner-div-tag">
                Entrepreneur name
              </label>
              <input
                type="text"
                id="Entrepreneur_Name"
                name="Entrepreneur_Name"
                style={{ width: "75%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <div className="inner-div-tag">
                <span>Sex:</span>
                <div style={{ display: "flex", padding: "0.5vw" }}>
                  <input
                    type="radio"
                    name="Sex"
                    value="male"
                    style={{ margin: "0.5%" }}
                  />
                  M
                  <input
                    type="radio"
                    name="Sex"
                    value="female"
                    style={{ margin: "0.5%" }}
                  />
                  F
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
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Address" className="inner-div-tag">
                Address:
              </label>
              <input
                type="text"
                id="Address"
                name="Address"
                style={{ width: "70%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
              <label htmlFor="Website" className="inner-div-tag">
                Website:{" "}
              </label>
              <input
                type="text"
                id="Website"
                name="Website"
                style={{ width: "70%", border: "transparent" }}
              />
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>

            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>
            <div className="div-style" style={{ borderTop: 0 }}>
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
            </div>
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
            <button type="submit">submit</button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Table;
