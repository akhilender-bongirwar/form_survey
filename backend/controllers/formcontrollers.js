// import router from "express";

const formdatacontroller = async (req, res) => {
  data = req.body;
  res.send({
    success: true,
    data,
  });
};

export { formdatacontroller };
