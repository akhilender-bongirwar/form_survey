import React from "react";

export const Surveyer = () => {
  return (
    <div>
      <form
        action="http://localhost:8080/uploadPhoto"
        method="post"
        enctype="multipart/form-data"
      >
        <input type="file" name="myImage" id="input-files" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Surveyer;
