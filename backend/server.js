import express from "express";
import "dotenv/config.js";
import morgan from "morgan";
import { ConnectDB } from "./db.js";
import cors from "cors";
import path from 'path'
import { fileURLToPath } from "url";
const app = express();

// import {} from "./controllers/formcontrollers";
import { formdatacontroller } from "./controllers/formcontrollers.js";
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./frontend/build')))
app.use(express.json());
ConnectDB();
//rest api
app.use('*',function (req,res){
res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
})
app.post("/form-data", formdatacontroller);
app.listen(process.env.PORT, () => {
  console.log(`server has started at port ${process.env.PORT}`);
});
