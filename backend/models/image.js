import mongoose from "mongoose";

const Schema = mongoose.Schema;
const imageData = new Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
});
const ImageModel = mongoose.model("ImageData", imageData);
export { ImageModel };
