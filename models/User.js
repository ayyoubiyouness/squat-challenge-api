
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  totalSquats: {
    type: Number,
    default: 0
  },
  squatHistory: [
    {
      date: {
        type: Date,
        default: Date.now
      },
      count: {
        type: Number,
        required: true
      }
    }
  ]
});
export default mongoose.model("User", userSchema)

