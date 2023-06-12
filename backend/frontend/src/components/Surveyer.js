import React from "react";

export const Surveyer = () => {
  return (
    <div>
      <form
        action="http://localhost:8080/uploadPhoto"
        method="post"
        enctype="multipart/form-data"
      >
        <label htmlFor="input-files"></label>
        <input type="file" name="myImage" id="input-files" />
        <button className="arrow_notation" type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Surveyer;
