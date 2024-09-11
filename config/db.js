import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB")
        
    } catch (error) {
        throw error
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

export default connectDB