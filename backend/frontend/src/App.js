import React, { useState } from "react";
import "./App.css";
import FormPart2 from "./components/FormPart2";
import FormPart3 from "./components/FormPart3";
import FormPart4 from "./components/FormPart4";
import FormPart5 from "./components/FormPart5";
import FormPart6 from "./components/FormPart6";
import Table from "./components/Table";
import Outer from "./Outer";
import "./i18n";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import First from "./components/First";
import { Surveyer } from "./components/Surveyer";
import { UploadSurvey } from "./components/UploadSurvey";
import { Landing } from "./components/Landing";
import { NotFound } from "./components/NotFound";
import Frontpart from "./components/Frontpart";

function App() {
  const [expand, setexpand] = useState(false);
  const [expand2, setexpand2] = useState(false);
  const [addfields, setAddFields] = React.useState({
    0: { name: "", assistance: "", challanges: "" },
  });
  const [formD, setFormD] = useState({
    District_code: "HA",
    submission_date: "",
    Enterprise_Name: "",
    Entrepreneur_Name: "",
    Sex: "",
    Category: "",
    Address: "",
    Firm_Registered: "",
    Udyam_Registration: "",
    UAM_UEM_Number: "",
    Year_of_Establishment: "",
    Type_of_Business: {
      service:false,
      manufacturing:false,
      trading:false,
    },
    Operations_seasonal: "",
    months_of_operation: "",
    Ownership_Pattern: "",
    ownership_female_partnership: "",
    Cluster: "",
    Cluster_Yes: "",
    Cluster_No: "",
    use_computer: "",
    //added
    TOP_THREE_PRODUCTS: {
      TOP_THREE_PRODUCTS_1: "",
      TOP_THREE_PRODUCTS_2: "",
      TOP_THREE_PRODUCTS_3: "",
    },
    //added
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
      other: "",
    },
    employee_unit: "NUMBER",
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
    thisCurrent_Bank_Account: "",
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
    //
    // industry_option: {
    //   service_industry_opt: false,
    //   manufacturing_industry_opt: true,
    // },
    Raw_Materials: {
      Direct:false,
      Through_Traders:false,
      Online:false,
      other:"",
    },
    if_Raw_Materials_available: "",
    if_no_mention_difficulties: "",
    green_tech: "",
    adopted_green_tech: "",
    environment_clearence: "",
    required_environment_clearence:"",
    final_product_sold_to: {
      Trader_Agents: false,
      Wholesalers: false,
      Retailers: false,
      Large_Manufacturers_Anchor_units: false,
      Exporters: false,
      OEMs: false,
      End_Users: false,
      Others: false,
    },
    markets_supplied: {
      within_State: false,
      outside_State: false,
      outside_country: false,
    },
    have_product_brand_name: "",
    Brand_name: "",
    challenges_face_hear:"",
    challenges_while_selling: {
      advance_technology: false,
      quality_of_product: false,
      market_competition: false,
      capital: false,
      branding_and_marketing: false,
      other: "",
    },
    involved_in_marketing: "",
    options_you_leverage_for_sale: {
      exhibitions: false,
      portals: false,
      websites: false,
      social_media: false,
      Common_marketing_facility: false,
      other: "",
    },
    Quality_Testing_lab_available: "",
    labour_and_training: "",
    skilled_labour_is_required: "",
    Nature_of_Services_Offered: {
      Nature_of_Services_Offered_a: "",
      Nature_of_Services_Offered_b: "",
      Nature_of_Services_Offered_c: "",
    },
    Challenges_faced: {
      Challenges_faced_a: "",
      Challenges_faced_b: "",
      Challenges_faced_c: "",
    },
    Govt_Scheme_Challenges: "",
    Support_required: "",
    //added
    // policy_program_1: "",
    // policy_program_2: "",
    //

    aware_of_govt_policy: "",
    // Policy_benifitted: "",
    // Challenges_faced_policy_related: "",
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
        Not_Aware: false,
      },
      State_Govt: {
        ODOP: false,
        UP_MSME_Promotion_Policy: false,
        Technical_upgradation: false,
        UP_Chief_Minister_Youth_Self_Employment_Scheme: false,
        UP_Startup_Policy_2020: false,
        Others: false,
        Not_Aware: false,
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
    //added
    Key_Reason_Preventing_loan: {
      Lack_of_awareness_of_bank_processes_requirements: false,
      High_Interest_Rate: false,
      Longer_Processing_time: false,
      Improper_documentation: false,
      No_nearby_bank_branches: false,
      other: "",
    },
    Major_source_credit_demand: {
      Raw_Materials: false,
      Salaries: false,
      Repair_and_Maintenance: false,
      Long_cash_cycle: false,
      Demand_due_to_peak_season: false,
      Duties_and_taxes: false,
      other: "",
    },
    //added
    applied_loan_outcome: {
      radio_button: "",
      other: "",
    },
    reason_of_rejection: "",
    availed_samadhaan_service: "",
    face_challenge_from_buyer: "",
    challenge_faced_payment: "",
    //added
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
    support_from_agency: "",
    Certification_required: "",
    Certification_export_support_required:"",
    laboratory_requirement: "",
    laboratory_export_support_required: "",
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
    //added
    Requirement_of_Training: "",
    ESDP_beneficiaries: "",
    Contact_Member_details_name: "",
    Contact_Member_details_contact: "",
    Contact_Member_details_designation: "",
    Contact_Member_details_email: "",
  });
  const { t } = useTranslation();

  return (
    <>
      <div>
        <button
          className="arrow_notation"
          type="button"
          onClick={() => {
            changeLanguage("hi");
            // console.log("click");
          }}
        >
          Hindi
        </button>
        <button
          className="arrow_notation"
          type="button"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Frontpart />} />
            <Route path="/eForm" element={<Outer />}>
              <Route
                index
                element={<First formD={formD} setFormD={setFormD} />}
              />
              <Route
                path="/eForm/1"
                element={<Table formD={formD} setFormD={setFormD} />}
              />
              <Route path="/eForm/surveyer" element={<Surveyer />} />
              <Route
                path="/eForm/2"
                element={
                  <FormPart2
                    formD={formD}
                    setFormD={setFormD}
                    expand={expand}
                    setexpand={setexpand}
                    expand2={expand2}
                    setexpand2={setexpand2}
                  />
                }
              />
              <Route
                path="/eForm/3"
                element={
                  <FormPart3
                    formD={formD}
                    addfields={addfields}
                    setAddFields={setAddFields}
                    setFormD={setFormD}
                  />
                }
              />
              <Route
                path="/eForm/4"
                element={<FormPart4 formD={formD} setFormD={setFormD} />}
              />
              <Route
                path="/eForm/5"
                element={<FormPart5 formD={formD} setFormD={setFormD} />}
              />
              <Route
                path="/eForm/6"
                element={
                  <FormPart6
                    formD={formD}
                    setFormD={setFormD}
                    expand2={expand2}
                    expand={expand}
                    addfields={addfields}
                  />
                }
              />
            </Route>
            <Route path="/uploadSurvey" element={<UploadSurvey />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
