import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    unique: true,
    required: true
  },
  totalSquats: {
    type: Number,
    default: 0
  }
});
export default mongoose.model("Company", companySchema)

