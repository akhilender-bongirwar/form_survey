import mongoose from "mongoose";

const ConnectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://akhileshjyotishi1729:HvCHg8fRNT19ri13@cluster3.i2qv5af.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));
};

export { ConnectDB };
