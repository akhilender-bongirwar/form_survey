import axios from "axios";
import React, { useEffect, useState } from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { google } from "googleapis";
// import axios from "axios";

// import { GoogleLogin } from "@react-oauth/google";
const Googledrive = () => {
  const [filedata, setfiledata] = useState();
  //   const [response, setcredentialresponse] = useState(null);
  //   const [token, settoken] = useState(null);
  //   const SCOPE = "https://www.googleapis.com/auth/drive.appdata";

  //   useEffect(() => {
  //     const initTokenClient = async () => {
  //       var client = await google.accounts.oauth2.initTokenClient({
  //         client_id:
  //           "196652697492-0je5vmmin2mf3f9u6igrvbb0d964v4ha.apps.googleusercontent.com",
  //         scope: "https://www.googleapis.com/auth/drive.appdata",
  //         callback: (response) => {
  //           // Handle the token response or error here
  //           console.log(response);
  //         },
  //       });
  //     };

  //     initTokenClient();
  //   }, []);

  //   const handleAuthorization = () => {
  //     client.requestAccessToken();
  //   };

  //   const uploadToGoogleDrive = async () => {
  // const contentType = "application/pdf";
  // const metadata = {
  //   name: filedata.name,
  //   mimeType: filedata.type,
  // };

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

  //     console.log(multipartRequestBody);

  //     fetch(
  //       "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: response,
  //           "Content-Type": "multipart/related; boundary=" + boundary,
  //         },
  //         body: multipartRequestBody,
  //       }
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  const sendfiledata = () => {
    console.log("clicked");
    const formdata = new FormData();
    formdata.append("file", filedata);
    console.log(formdata);
    axios
      .post("http://localhost:8080/drive-data/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(filedata);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <GoogleOAuthProvider clientId="196652697492-0je5vmmin2mf3f9u6igrvbb0d964v4ha.apps.googleusercontent.com">
    <div>
      <h1>Upload to Google Drive</h1>
      <div>
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setfiledata(e.target.files[0]);
          }}
          accept=".pdf"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            //   uploadToGoogleDrive();
            sendfiledata();
          }}
        >
          Upload
        </button>
        {/* <button onClick={tokenhandler}>tokenhandler</button> */}
        {/* <button
            onclick={(e) => {
              e.preventDefault();
              handleAuthorization();
            }}
          >
            Authorize me
          </button> */}
      </div>
    </div>
    // </GoogleOAuthProvider>
  );
};

export default Googledrive;
