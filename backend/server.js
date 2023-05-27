import express from "express";
import "dotenv/config.js";
import morgan from "morgan";
import { ConnectDB } from "./db.js";
import cors from "cors";
const app = express();

// import {} from "./controllers/formcontrollers";
import { formdatacontroller } from "./controllers/formcontrollers.js";

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
ConnectDB();

app.listen(process.env.PORT, () => {
  console.log(`server has started at port ${process.env.PORT}`);
});
app.post("/form-data", formdatacontroller);
