import mongoose from "mongoose";

const ConnectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://surveyform008:BEOrFi5lv3QWr9ti@cluster0.hqx4pj0.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"))
    .catch((err) => {
      console.log(err);
    });
};

export { ConnectDB };
