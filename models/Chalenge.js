import mongoose from "mongoose";

const chalengeSchema = new mongoose.Schema({
  squatNumber: {
    type: Number,
    required: true
  },
  chalengeDuration: {
    type: Number,
    required: true
  },
  squatTime: {
    type: Number,
    required : true
  }
});
export default mongoose.model("Chalenge", chalengeSchema)

