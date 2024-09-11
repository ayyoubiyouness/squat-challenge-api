import mongoose from "mongoose";

const squatRecordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  squatCount: {
    type: Number,
    required: true
  }
});
export default mongoose.model("SquatRecord", squatRecordSchema)

