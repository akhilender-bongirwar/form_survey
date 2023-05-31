// import router from "express";
import { SurveyDatamodel } from "../models/survey_model.js";
import mongoose from "mongoose";

const formdatacontroller = async (req, res) => {
  // console.log(req);
  const data = req.body;
  // console.log(data.body);
  const newdata = new SurveyDatamodel(data.body);
  newdata
    .save()
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err);
    });

  return res.send({
    success: true,
    data,
  });
};

export { formdatacontroller };
