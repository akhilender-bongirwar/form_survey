// import fs from "fs";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import path from "path";
import express from "express";
import stream from "stream";
// import { fileURLToPath } from "url";
import multer from "multer";
const uploadRouter = express.Router();

import { dirname } from "path";
import { fileURLToPath } from "url";

const scopes = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.appdata",
  "https://www.googleapis.com/auth/drive.file",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname + "/private_key_credentials.json"),
  scopes,
});
const upload = multer();
const uploadfile = async (fileObject) => {
  const bufferstream = new stream.PassThrough();
  bufferstream.end(fileObject[0].buffer);
  const { data } = await google
    .drive({
      version: "v3",
      auth: auth,
    })
    .files.create({
      media: {
        mimeType: fileObject[0].mimeType,
        body: bufferstream,
      },
      requestBody: {
        name: fileObject[0].originalname,
        parents: ["15x06y5Acmexitseidm5zCWhLEdx9iY9X"],
      },
      fields: "id,name",
    });
  console.log(data);
};

uploadRouter.post("/upload", upload.any(), async (req, res) => {
  console.log("object");
  try {
    const { files } = req;
    // console.log(req);
    await uploadfile(files);
    // console.log(body);
    res.status(200).send({
      success: true,
      message: "form submitted",
    });
  } catch (err) {
    return res.send({
      success: false,
      message: err,
    });
  }
});

// Get credentials and build service
// TODO (developer) - Use appropriate auth mechanism for your app

//filedata an object

// const contentType = "application/pdf";

// const boundary = "-------314159265358979323846";
// const delimiter = "\r\n--" + boundary + "\r\n";
// const close_delim = "\r\n--" + boundary + "--";

// const formdata = new FormData();
// formdata.append("file", new Blob([JSON.stringify(filedata)]));

// const multipartRequestBody =
//   delimiter +
//   "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
//   JSON.stringify(metadata) +
//   delimiter +
//   "Content-Type: " +
//   contentType +
//   "\r\n\r\n" +
//   formdata +
//   "\r\n" +
//   close_delim;

/**
 * Insert new file.
//  * @return {string} file ID
 */
// async function uploadBasicController(req, res) {
//   const scopes = [
//     "https://www.googleapis.com/auth/drive",
//     "https://www.googleapis.com/auth/drive.appdata",
//     "https://www.googleapis.com/auth/drive.file",
//   ];
//   // const __filename = fileURLToPath(import.meta.url);

//   const service = google.drive({ version: "v3", auth });
//   const authClient = await auth.getClient();
//   google.options({ auth: authClient });
//   // console.log("object");
//   // console.log(req);
//   const { file } = req.files;
//   // console.log(file);
//   // console.log(req.body);
//   const metadata = {
//     name: "filedata.name",
//     fields: "filedata.type",
//   };
//   //   console.log(formdata);
//   //   console.log(filedata);
//   const media = {
//     mimeType: "application/json",
//     body: file,
//   };

//   try {
//     console.log("object");
//     const file1 = await service.files.create({
//       requestBody: metadata,
//       media,
//     });
//     console.log(file1);
//     if (file1) {
//       return res.send({
//         success: true,
//         message: file1.data.id,
//       });
//       // console.log("File Id:", file.data.id);
//     } else {
//       return res.send({
//         success: false,
//         message: "try try smthing wrong",
//       });
//     }
//   } catch (err) {
//     // TODO(developer) - Handle error
//     return res.send({
//       success: false,
//       message: err,
//     });
//     // throw err;
//   }
// }

// export default uploadBasicController;
export default uploadRouter;
