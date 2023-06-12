import express from "express";
import "dotenv/config.js";
import morgan from "morgan";
import { ConnectDB } from "./db.js";
import cors from "cors";
import path from "path";
// import { fileURLToPath } from "url";
import { dirname } from "path";
import { fileURLToPath } from "url";

// import formidable from "express-formidable";
const app = express();

// import {} from "./controllers/formcontrollers";
import { formdatacontroller } from "./controllers/formcontrollers.js";
import uploadBasicController from "./controllers/google_drive2.js";
import uploadRouter from "./controllers/google_drive2.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const __dirname = dirname(fileURLToPath(import.meta.url));

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(express.json());
// app.use(formidableMiddleware());
ConnectDB();
//rest api
app.post("/form-data", formdatacontroller);
// console.log("al least smthing came");
app.use("/drive-data", uploadRouter);
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`server has started at port ${process.env.PORT}`);
});
