import express from "express";
import "dotenv/config.js";
import morgan from "morgan";
import { ConnectDB } from "./db.js";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const app = express();

import multer from "multer";
// import {} from "./controllers/formcontrollers";
import { formdatacontroller } from "./controllers/formcontrollers.js";
import { ImageModel } from "./models/image.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(express.json());
ConnectDB();
//rest api
app.post("/form-data", formdatacontroller);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
app.post("/uploadPhoto", upload.single("myImage"), (req, res) => {
  const obj = {
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  const newImage = new ImageModel({
    image: obj.img,
  });
  newImage
    .save()
    .then((e) => {
      // console.log(e)
      res.send("home page");
    })
    .catch((e) => console.log(e));
});
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`server has started at port ${process.env.PORT}`);
});
