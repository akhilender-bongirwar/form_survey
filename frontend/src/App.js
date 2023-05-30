import React, { useState } from "react";
import "./App.css";
import FormPart2 from "./components/FormPart2";
import FormPart3 from "./components/FormPart3";
import FormPart4 from "./components/FormPart4";
import FormPart5 from "./components/FormPart5";
import FormPart6 from "./components/FormPart6";
import Table from "./components/Table";
import Outer from "./Outer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [formD, setFormD] = useState({
    Enterprise_Name: "",
    Entrepreneur_Name: "",
    Sex: "",
    Category: "",
    Address: "",
    Firm_Registered: "",
    Udyam_Registration: "",
    UAM_UEM_Number: "",
    Year_of_Establishment: "",
    Type_of_Business: "",
    Operations_seasonal: "",
    months_of_operation: "",
    Ownership_Pattern: "",
    Cluster: "",
    IF_YES_HOW_MANY_UNITS: "",
    use_computer: "",
    TOP_THREE_PRODUCTS: [
      {
        TOP_THREE_PRODUCTS_1: "",
        TOP_THREE_PRODUCTS_2: "",
        TOP_THREE_PRODUCTS_3: "",
      },
    ],
    sell_produce_majorly: {
      Local_Market: false,
      Government: false,
      online: false,
      Other_states: false,
      export_outside: false,
      other: "",
    },
    service_industry: {
      Local_Market: false,
      Government: false,
      online: false,
      Other_states: false,
      internationally: false,
    },
    full_time_Emoployee: "",
    part_time_Emoployee: "",
    Permanent_Emoployee: "",
    Contractual_Emoployee: "",
    male_employee: "",
    female_employee: "",
    formal_source: "",
    informal_source: "",
    internal_fund_generation: "",
    other_financing_source: "",
    loan_availed: "",
    loan_specification: "",
    loan_adequate: "",
    loan_required: "",
    availed_loan_last_year: "",
    availed_loan_amount: "",
    innovation_RD: "",
    innovation_RD_institute: "",
    govt_scheme: "",
    govt_program: "",
    govt_organisation: "",
    pan_card_company: "",
    GST_NO: "",
    Current_Bank_Account: "",
    have_CA_audited_financial_statement: "",
    Annual_Turnover: "",
    Investment_plant_machinery: "",
    Investment_IT_Infrastructure: "",
    You_Export: "",
    Export_Value: "",
    Overall_Annual_production: "",
    Electric_Availability_Hours: "",
    Electricity_rate_Per_Unit: "",
    Water_Availability: "",
    Effluent_Treatment_Constraint: "",
    GOVT_Training: "",
    Email: "",
    Phone_Number: "",
    Raw_Materials: "",
    if_Raw_Materials_available: "",
    if_no_mention_difficulties: "",
    green_tech: "",
    environment_clearence: "",
    final_product_sold_to: "",
    markets_supplied: {
      within_State: false,
      outside_State: false,
      outside_country: false,
    },
    have_product_brand_name: "",
    Brand_name: "",
    challenges_while_selling: "",
    involved_in_marketing: "",
    options_you_leverage_for_sale: "",
    Quality_Testing_lab_available: "",
    labour_and_training: "",
    skilled_labour_is_required: "",
    Nature_of_Services_Offered: "",
    Challenges_faced: "",
    Govt_Scheme_Challenges: "",
    Support_required: "",
    //added
    policy_program_1: "",
    policy_program_2: "",
    //
    aware_of_govt_policy: "",
    Policy_benifitted: "",
    Benifits_of_policy: "",
    Challenges_faced_policy_related: "",
    //added
    expectation_from_govt_1: "",
    expectation_from_govt_2: "",
    //
    //added
    Aware_of_listed_scehmes: {
      Central_Govt: {
        ZED: false,
        MSME_Champions: false,
        Samadhan: false,
        CGTMSE: false,
        IPR_scheme: false,
        Digital_Scheme: false,
        Design_scheme: false,
        TREDs: false,
        LEAN: false,
      },
      State_Govt: {
        ODOP: false,
        UP_MSME_Promotion_Policy: false,
        Technical_upgradation: false,
        UP_Chief_Minister_Youth_Self_Employment_Scheme: false,
        UP_Startup_Policy_2020: false,
        Others: false,
      },
    },
    Remarks: "",
    //added
    Scheme_Like_to_avail: {
      Central_Govt: {
        ZED: false,
        MSME_Champions: false,
        Samadhan: false,
        CGTMSE: false,
        IPR_scheme: false,
        Digital_Scheme: false,
        Design_scheme: false,
        TREDs: false,
        LEAN: false,
      },
      State_Govt: {
        ODOP: false,
        UP_MSME_Promotion_Policy: false,
        Technical_upgradation: false,
        UP_Chief_Minister_Youth_Self_Employment_Scheme: false,
        UP_Startup_Policy_2020: false,
        Others: false,
      },
    },
    scheme_availed_by_you_central_govt: "",
    scheme_availed_by_you_state_govt: "",
    Key_Reason_Preventing_loan: {
      Lack_of_awareness_of_bank_processes_requirements: false,
      High_Interest_Rate: false,
      Longer_Processing_time: false,
      Improper_documentation: false,
      No_nearby_bank_branches: false,
      other: "",
    },
    source_of_credit_form: "",
    //added
    applied_loan_outcome: {
      radio_button: "",
      other: "",
    },
    reason_of_rejection: "",
    availed_samadhaan_service: "",
    face_challenge_from_buyer: "",
    Questionnaire_For_Exporters: {
      Certifications: {
        Currently_owned_1: "",
        To_be_Required_1: "",
      },
      Infrastructure: {
        Currently_owned_2: "",
        To_be_Required_2: "",
      },
      Laboratory: {
        Currently_owned_3: "",
        To_be_Required_3: "",
      },
    },
    Certification_required: "",
    laboratory_requirement: "",
    Requirement_of_Soft_Interventions: {
      Counselling: "",
      Upgradation_of_IT_Infrastructure: "",
      Participation_in_Training: "",
      Institution_Development: "",
      Implementation_of_new_software: "",
      Training_Process_Improvement: "",
      Market_Promotion_Initiatives: "",
      Design_and_product_development: "",
      Promotion_Campaign: "",
    },
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outer />}>
          <Route index element={<Table formD={formD} setFormD={setFormD} />} />
          <Route
            path="/2"
            element={<FormPart2 formD={formD} setFormD={setFormD} />}
          />
          <Route
            path="/3"
            element={<FormPart3 formD={formD} setFormD={setFormD} />}
          />
          <Route
            path="/4"
            element={<FormPart4 formD={formD} setFormD={setFormD} />}
          />
          <Route
            path="/5"
            element={<FormPart5 formD={formD} setFormD={setFormD} />}
          />
          <Route
            path="/6"
            element={<FormPart6 formD={formD} setFormD={setFormD} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
