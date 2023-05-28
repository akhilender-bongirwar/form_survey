import mongoose from "mongoose";

const Schema = mongoose.Schema;

const surveyData = new Schema({
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
    required: true,
  },
  Year_of_Establishment: {
    type: Number,
    required: true,
  },
  Type_of_Business: {
    type: String,
    enum: ["manufacturing", "service", "trading"],
    required: true,
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
   ownership_female_partnership:{
    type:Number,
   },
  Cluster: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  IF_YES_HOW_MANY_UNITS: {
    type: String,
  },
  use_computer: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  TOP_THREE_PRODUCTS: {
    type: [String],
    required: true,
  },
  // sell_produce_majorly: {
  //   type: [String],
  // },//left
  // service_industry: {
  //   type: [String],
  // },//left
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
  other_source: {
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
    required: true,
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
  govt_scheme:{
    type:String,
  },
  govt_program:{
    type:String,
  },
  govt_organisation:{
    type:String,
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
  Current_Bank_Account: {
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
    required: true,
  },
  Phone_Number: {
    type: Number,
    required: true,
  },
  // Raw_Materials: {
  //   type: String,
  //   required: true,
  // },
  // if_Raw_Materials_available: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // if_no_mention_difficulties: {
  //   type: String,
  // },
  // green_tech: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // environment_clearence: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // final_product_sold_to: {
  //   type: String,
  //   required: true,
  // },//multiple
  // markets_supplied: {
  //   type: String,
  //   enum: ["Within State", " Outside State", "Outside Country"],
  // },//multiple
  // have_product_brand_name: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // Brand_name: {
  //   type: String,
  // },
  // challenges_while_selling: {
  //   type: String,
  // },//multiple
  // involved_in_marketing: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },//multiple + add a field
  // Quality_Testing_lab_available: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // labour_and_training: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // Nature_of_Services_Offered: {
  //   type: [String],
  //   required: true,
  // },
  // Challenges_faced: {
  //   type: [String],
  //   required: true,
  // },
  // Govt_Scheme_Challenges: {
  //   type: [String],
  //   required: true,
  // },
  // Support_required: {
  //   type: String,
  //   required: true,
  // },
  // aware_of_govt_policy: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // Policy_benifitted: {
  //   type: [String],
  //   required: true,
  // },
  // Challenges_faced_policy_related: {
  //   type: [String],
  //   required: true,
  // },
  // expectation_from_govt: {
  //   type: [String],
  // },
  // Aware_of_listed_scehmes: {
  //   Central_Govt: {
  //     type: [String],
  //     required: true,
  //     enum: [
  //       "ZED",
  //       "LEAN",
  //       "TREDs",
  //       "Design_scheme",
  //       "Digital_Scheme",
  //       "IPR_scheme",
  //       "Samadhan",
  //       "CGTMSE",
  //       "MSME Champions",
  //     ],
  //   },
  //   State_Government: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // Remarks: {
  //   type: String,
  //   required: true,
  // },
  // Scheme_Like_to_avail: {
  //   Central_Govt: {
  //     type: String,
  //     enum: [
  //       "ZED",
  //       "LEAN",
  //       "TREDs",
  //       "Design_scheme",
  //       "Digital_Scheme",
  //       "IPR_scheme",
  //       "Samadhan",
  //       "CGTMSE",
  //       " MSME Champions",
  //     ],
  //   },
  //   State_Govt: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // scheme_availed_by_you: {
  //   type: String,
  //   required: true,
  // },
  // Key_Reason_Preventing_loan: {
  //   type: String,
  //   required: true,
  // },
  // source_of_credit_form: {
  //   type: String,
  //   required: true,
  // },
  // applied_loan_outcome: {
  //   type: [String],
  //   required: true,
  // },
  // reason_of_rejection: {
  //   type: String,
  //   required: true,
  // },
  // availed_samadhaan_service: {
  //   type: String,
  //   enum: ["YES", "NO"],
  //   required: true,
  // },
  // face_challenge_from_buyer: {
  //   type: String,
  //   required: true,
  // },
  // Questionnaire_For_Exporters: {
  //   Certifications: {
  //     Currently_owned: {
  //       type: String,
  //     },
  //     To_be_Required: {
  //       type: String,
  //     },
  //   },
  //   added 1 2 3
  //   Infrastructure: {
  //     Currently_owned: {
  //       type: String,
  //     },
  //     To_be_Required: {
  //       type: String,
  //     },
  //   },
  //   Laboratory: {
  //     Currently_owned: {
  //       type: String,
  //     },
  //     To_be_Required: {
  //       type: String,
  //     },
  //   },
  //   Certification_required: {
  //     type: String,
  //     required: true,
  //     tentative_cost: {
  //       type: String,
  //     },
  //   },
  //   laboratory_requirement: {
  //     type: String,
  //     required: true,
  //     tentative_cost: {
  //       type: String,
  //     },
  //   },
  // },
  // Requirement_of_Soft_Interventions: {
  //   Counselling: {
  //     type: String,
  //     required: true,
  //   },
  //   Upgradation_of_IT_Infrastructure: {
  //     type: String,
  //     required: true,
  //   },
  //   Participation_in_Training: {
  //     type: String,
  //     required: true,
  //   },
  //   Institution_Development: {
  //     type: String,
  //     required: true,
  //   },
  //   Implementation_of_new_software: {
  //     type: String,
  //     required: true,
  //   },
  //   Training_Process_Improvement: {
  //     type: String,
  //     required: true,
  //   },
  //   Market_Promotion_Initiatives: {
  //     type: String,
  //     required: true,
  //   },
  //   Design_and_product_development: {
  //     type: String,
  //     required: true,
  //   },
  //   Promotion_Campaign: {
  //     type: String,
  //     required: true,
  //   },
  // },
});

const SurveyDatamodel = mongoose.model("SurveyData", surveyData);
export { SurveyDatamodel };
