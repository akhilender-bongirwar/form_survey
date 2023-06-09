import mongoose from "mongoose";

const Schema = mongoose.Schema;

const surveyData = new Schema({
  submission_date: {
    type: String,
    required: true,
  },
  District_Code: {
    type: String,
    required: true,
  },
  Enterprise_Name: {
    type: String,
    required: true,
  },
  Entrepreneur_Name: {
    type: String,
    required: true,
  },
  Sex: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    enum: ["SC", "ST", "Minority", "OBC", "General"],
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  challenges_face_hear: {
    type: String,
  },
  Firm_Registered: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  Udyam_Registration: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  UAM_UEM_Number: {
    type: Number,
  },
  Year_of_Establishment: {
    type: Number,
    required: true,
  },
  Type_of_Business: {
    service:{
      type:Boolean,
      required:true,
    },
    manufacturing:{
      type:Boolean,
      required:true,
    },
    trading:{
      type:Boolean,
      required:true,
    },
  },
  Operations_seasonal: {
    type: String,
    enum: ["YES", "NO"],
  },
  months_of_operation: {
    type: Number,
  },
  Ownership_Pattern: {
    type: String,
    enum: [
      "proprietary",
      "partnership",
      "private",
      "LLP",
      "PUBLIC",
      "NO LEGAL ENTITY",
    ],
    required: true,
  },
  ownership_female_partnership: {
    type: Number,
  },
  Cluster: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  Cluster_Yes: {
    type: String,
  },
  Cluster_No: {
    type: String,
  },
  use_computer: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  TOP_THREE_PRODUCTS: {
    TOP_THREE_PRODUCTS_1: {
      type: String,
    },
    TOP_THREE_PRODUCTS_2: {
      type: String,
    },
    TOP_THREE_PRODUCTS_3: {
      type: String,
    },
  },
  sell_produce_majorly: {
    Local_Market: {
      type: Boolean,
      required: true,
    },
    Government: {
      type: Boolean,
      required: true,
    },
    online: {
      type: Boolean,
      required: true,
    },
    Other_states: {
      type: Boolean,
      required: true,
    },
    Local_Market: {
      type: Boolean,
      required: true,
    },
    other: {
      type: String,
    },
  },
  service_industry: {
    Local_Market: {
      type: Boolean,
      required: true,
    },
    Government: {
      type: Boolean,
      required: true,
    },
    online: {
      type: Boolean,
      required: true,
    },
    Other_states: {
      type: Boolean,
      required: true,
    },
    internationally: {
      type: Boolean,
      required: true,
    },
    other: {
      type: String,
    },
  },
  employee_unit: {
    type: String,
    required: true,
  },
  full_time_Emoployee: {
    type: Number,
    required: true,
  },
  part_time_Emoployee: {
    type: Number,
    required: true,
  },

  Permanent_Emoployee: {
    type: Number,
    required: true,
  },
  Contractual_Emoployee: {
    type: Number,
    required: true,
  },
  male_employee: {
    type: Number,
    required: true,
  },
  female_employee: {
    type: Number,
    required: true,
  },
  formal_source: {
    type: String,
    required: true,
  },
  informal_source: {
    type: String,
    required: true,
  },
  internal_fund_generation: {
    type: String,
    required: true,
  },
  other_financing_source: {
    type: String,
  },
  loan_availed: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  loan_specification: {
    type: String,
  },
  loan_adequate: {
    type: String,
    enum: ["YES", "NO"],
  },
  loan_required: {
    type: Number,
  },
  availed_loan_last_year: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  availed_loan_amount: {
    type: String,
  },
  innovation_RD: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  innovation_RD_institute: {
    type: String,
  },
  govt_scheme: {
    type: String,
  },
  govt_program: {
    type: String,
  },
  govt_organisation: {
    type: String,
  },
  pan_card_company: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  GST_NO: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  thisCurrent_Bank_Account: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  have_CA_audited_financial_statement: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  Annual_Turnover: {
    type: Number,
    required: true,
  },
  Investment_plant_machinery: {
    type: Number,
    required: true,
  },
  Investment_IT_Infrastructure: {
    type: Number,
    required: true,
  },
  You_Export: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  Export_Value: {
    type: Number,
    required: true,
  },
  Overall_Annual_production: {
    type: Number,
    required: true,
  },
  Electric_Availability_Hours: {
    type: Number,
    required: true,
  },
  Electricity_rate_Per_Unit: {
    type: Number,
    required: true,
  },
  Water_Availability: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  Effluent_Treatment_Constraint: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },

  GOVT_Training: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  Email: {
    type: String,
  },
  Phone_Number: {
    type: Number,
    required: true,
  },
  // industry_option: {
  //   service_industry_opt: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   manufacturing_industry_opt: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  Raw_Materials: {
    radio_button: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  if_Raw_Materials_available: {
    type: String,
    enum: ["YES", "NO"],
  },
  if_no_mention_difficulties: {
    type: String,
  },
  green_tech: {
    type: String,
    enum: ["YES", "NO"],
  },
  environment_clearence: {
    type: String,
    enum: ["YES", "NO"],
  },
  final_product_sold_to: {
    Trader_Agents: {
      type: Boolean,
      required: true,
    },
    Wholesalers: {
      type: Boolean,
      required: true,
    },
    Retailers: {
      type: Boolean,
      required: true,
    },
    Large_Manufacturers_Anchor_units: {
      type: Boolean,
      required: true,
    },
    Exporters: {
      type: Boolean,
      required: true,
    },
    OEMs: {
      type: Boolean,
      required: true,
    },
    End_Users: {
      type: Boolean,
      required: true,
    },

    Others: {
      type: Boolean,
    },
  }, //multiple
  markets_supplied: {
    within_State: {
      type: Boolean,
      required: true,
    },
    outside_State: {
      type: Boolean,
      required: true,
    },
    outside_country: {
      type: Boolean,
      required: true,
    },
    //enum: ["Within State", " Outside State", "Outside Country"],
  }, //multiple
  have_product_brand_name: {
    type: String,
    enum: ["YES", "NO"],
  },
  Brand_name: {
    type: String,
  },
  challenges_while_selling: {
    advance_technology: {
      type: Boolean,
      required: true,
    },
    quality_of_product: {
      type: Boolean,
      required: true,
    },
    market_competition: {
      type: Boolean,
      required: true,
    },
    capital: {
      type: Boolean,
      required: true,
    },
    branding_and_marketing: {
      type: Boolean,
      required: true,
    },
    other: {
      type: String,
    },
  }, //multiple
  involved_in_marketing: {
    type: String,
    enum: ["YES", "NO"],
  }, //multiple + add a field
  options_you_leverage_for_sale: {
    exhibitions: {
      type: Boolean,
      required: true,
    },
    portals: {
      type: Boolean,
      required: true,
    },
    websites: {
      type: Boolean,
    },
    social_media: {
      type: Boolean,
      required: true,
    },
    Common_marketing_facility: {
      type: Boolean,
      required: true,
    },
    other: {
      type: String,
    },
  },
  Quality_Testing_lab_available: {
    type: String,
    enum: ["YES", "NO"],
  },
  labour_and_training: {
    type: String,
    enum: ["YES", "NO"],
  },

  skilled_labour_is_required: {
    type: String,
    enum: ["YES", "NO"],
  },
  Nature_of_Services_Offered: {
    Nature_of_Services_Offered_a: {
      type: String,
    },
    Nature_of_Services_Offered_b: {
      type: String,
    },
    Nature_of_Services_Offered_c: {
      type: String,
    },
  },

  Challenges_faced: {
    Challenges_faced_a: {
      type: String,
    },
    Challenges_faced_b: {
      type: String,
    },
    Challenges_faced_c: {
      type: String,
    },
  },
  Govt_Scheme_Challenges: {
    type: String,
  },
  Support_required: {
    type: String,
  },
  aware_of_govt_policy: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },

  // policy_program_1: {
  //   type: String,
  // },
  // policy_program_2: {
  //   type: String,
  // },

  // Policy_benifitted: {
  //   type: String,
  // },

  // Challenges_faced_policy_related: {
  //   type: String,
  // },
  State_benefits_obj: {
    type: mongoose.Schema.Types.Mixed,
  },

  expectation_from_govt_1: {
    type: String,
  },
  expectation_from_govt_2: {
    type: String,
  },
  Aware_of_listed_scehmes: {
    Central_Govt: {
      ZED: {
        type: Boolean,
        required: true,
      },
      MSME_Champions: {
        type: Boolean,
        required: true,
      },
      Samadhan: {
        type: Boolean,
        required: true,
      },
      CGTMSE: {
        type: Boolean,
        required: true,
      },
      IPR_scheme: {
        type: Boolean,
        required: true,
      },
      Digital_Scheme: {
        type: Boolean,
        required: true,
      },
      Design_scheme: {
        type: Boolean,
        required: true,
      },
      TREDs: {
        type: Boolean,
        required: true,
      },
      LEAN: {
        type: Boolean,
        required: true,
      },
      Not_Aware: {
        type: Boolean,
        required: true,
      },
    },
    State_Govt: {
      ODOP: {
        type: Boolean,
        required: true,
      },
      UP_MSME_Promotion_Policy: {
        type: Boolean,
        required: true,
      },
      Technical_upgradation: {
        type: Boolean,
        required: true,
      },
      UP_Chief_Minister_Youth_Self_Employment_Scheme: {
        type: Boolean,
        required: true,
      },
      UP_Startup_Policy_2020: {
        type: Boolean,
        required: true,
      },
      Others: {
        type: Boolean,
        required: true,
      },
      Not_Aware: {
        type: Boolean,
        required: true,
      },
      //enum:["ODOP","UP MSME Promotion Policy","Technical upgradation","UP Chief Minister Youth Self Employment Scheme",]
    },
  },
  Remarks: {
    type: String,
    required: true,
  },
  Scheme_Like_to_avail: {
    Central_Govt: {
      ZED: {
        type: Boolean,
        required: true,
      },
      MSME_Champions: {
        type: Boolean,
        required: true,
      },
      Samadhan: {
        type: Boolean,
        required: true,
      },
      CGTMSE: {
        type: Boolean,
        required: true,
      },
      IPR_scheme: {
        type: Boolean,
        required: true,
      },
      Digital_Scheme: {
        type: Boolean,
        required: true,
      },
      Design_scheme: {
        type: Boolean,
        required: true,
      },
      TREDs: {
        type: Boolean,
        required: true,
      },
      LEAN: {
        type: Boolean,
        required: true,
      },
    },
    State_Govt: {
      ODOP: {
        type: Boolean,
        required: true,
      },
      UP_MSME_Promotion_Policy: {
        type: Boolean,
        required: true,
      },
      Technical_upgradation: {
        type: Boolean,
        required: true,
      },
      UP_Chief_Minister_Youth_Self_Employment_Scheme: {
        type: Boolean,
        required: true,
      },
      UP_Startup_Policy_2020: {
        type: Boolean,
        required: true,
      },
      Others: {
        type: Boolean,
        required: true,
      },
    },
  },
  scheme_availed_by_you_central_govt: {
    type: String,
  },
  scheme_availed_by_you_state_govt: {
    type: String,
  },
  Key_Reason_Preventing_loan: {
    Lack_of_awareness_of_bank_processes_requirements: {
      type: Boolean,
      required: true,
    },
    High_Interest_Rate: {
      type: Boolean,
      required: true,
    },
    Longer_Processing_time: {
      type: Boolean,
      required: true,
    },
    Improper_documentation: {
      type: Boolean,
      required: true,
    },
    No_nearby_bank_branches: {
      type: Boolean,
      required: true,
    },
    other: {
      type: String,
    },
  },
  Major_source_credit_demand: {
    Raw_Materials: {
      type: Boolean,
      required: true,
    },
    Salaries: {
      type: Boolean,
      required: true,
    },
    Repair_and_Maintenance: {
      type: Boolean,
      required: true,
    },
    Long_cash_cycle: {
      type: Boolean,
      required: true,
    },
    Demand_due_to_peak_season: {
      type: Boolean,
      required: true,
    },
    Duties_and_taxes: {
      type: Boolean,
      required: true,
    },
    other: {
      type: String,
    },
  },
  // source_of_credit_form: {
  //   type: String,
  //   required: true,
  // },
  applied_loan_outcome: {
    radio_button: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  reason_of_rejection: {
    type: String,
  },
  availed_samadhaan_service: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  face_challenge_from_buyer: {
    type: String,
  },
  Certifications: {
    Currently_owned_1: {
      type: String,
    },
    To_be_Required_1: {
      type: String,
    },
  },
  Infrastructure: {
    Currently_owned_2: {
      type: String,
    },
    To_be_Required_2: {
      type: String,
    },
  },
  Laboratory: {
    Currently_owned_3: {
      type: String,
    },
    To_be_Required_3: {
      type: String,
    },
  },
  Certification_required: {
    type: String,
  },
  laboratory_requirement: {
    type: String,
  },
  Requirement_of_Soft_Interventions: {
    Counselling: {
      type: String,
    },
    Upgradation_of_IT_Infrastructure: {
      type: String,
    },
    Participation_in_Training: {
      type: String,
    },
    Institution_Development: {
      type: String,
    },
    Implementation_of_new_software: {
      type: String,
    },
    Training_Process_Improvement: {
      type: String,
    },
    Market_Promotion_Initiatives: {
      type: String,
    },
    Design_and_product_development: {
      type: String,
    },
    Promotion_Campaign: {
      type: String,
    },
  },
  Requirement_of_Training: {
    type: String,
    enum: ["YES", "NO"],
  },
  support_from_agency: {
    type: String,
    enum: ["YES", "NO"],
  },
  ESDP_beneficiaries: {
    type: String,
    required: true,
  },
  Contact_Member_details_name: {
    type: String,
    required: true,
  },
  Contact_Member_details_contact: {
    type: String,
    required: true,
  },
  Contact_Member_details_designation: {
    type: String,
    required: true,
  },
  Contact_Member_details_email: {
    type: String,
    required: true,
  },
});

const SurveyDatamodel = mongoose.model("SurveyData", surveyData);
export { SurveyDatamodel };
