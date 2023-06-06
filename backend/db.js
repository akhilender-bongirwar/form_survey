import mongoose from "mongoose";
import 'dotenv/config.js'
// console.log(process.env.MONGOURI)
const ConnectDB = () => {
  mongoose
    .connect(
    process.env.MONGOURI
    )
    .then(() => console.log("Connected!"))
    .catch((err) => {
      console.log(err);
    });
};

export { ConnectDB };
