import React,{useState} from "react";
import "./App.css";
import FormPart2 from "./components/FormPart2";
import FormPart3 from "./components/FormPart3";
import FormPart4 from "./components/FormPart4";
import FormPart5 from "./components/FormPart5";
import FormPart6 from "./components/FormPart6";
import Table from "./components/Table";
import Outer from "./Outer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  const [formD,setFormD]=useState({
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
    TOP_THREE_PRODUCTS: [{
      TOP_THREE_PRODUCTS_1:"",
      TOP_THREE_PRODUCTS_2:"",
      TOP_THREE_PRODUCTS_3:""
    }
    ],
    sell_produce_majorly: "",
    service_industry: "",
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
    markets_supplied: "",
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
    aware_of_govt_policy: "",
    Policy_benifitted: "",
    Benifits_of_policy: "",
    Challenges_faced_policy_related: "",
    expectation_from_govt: "",
    Aware_of_listed_scehmes: {
      Central_Govt: "",
      State_Govt: "",
    },
    Remarks: "",
    Scheme_Like_to_avail: {
      Central_Govt: "",
      State_Govt: "",
    },
    scheme_availed_by_you_central_govt: "",
    scheme_availed_by_you_state_govt:"",
    Key_Reason_Preventing_loan: "",
    source_of_credit_form: "",
    applied_loan_outcome: "",
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
    }})
  return (
    <Router>
    <Routes>
      <Route  path="/" element={<Outer />}>
        <Route index  element={<Table formD={formD} setFormD={setFormD}/>} />
        <Route path="/2" element={<FormPart2  formD={formD} setFormD={setFormD} />} />
        <Route path="/3" element={<FormPart3  formD={formD} setFormD={setFormD} />}/>
        <Route path="/4" element={<FormPart4  formD={formD} setFormD={setFormD} />}/>
        <Route path="/5" element={<FormPart5  formD={formD} setFormD={setFormD} />}/>
        <Route path="/6" element={<FormPart6  formD={formD} setFormD={setFormD} />}/>
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
