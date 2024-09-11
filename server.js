import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import companyRoutes from "./routes/companyRoutes.js"
import chalengeRoute from './routes/chalengeRoutes.js'
import squatRoutes from "./routes/squatRecordRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js";
const app = express()
dotenv.config()

// Connect to the database
// connect()






// middlware 
app.use(express.json())
app.use(cors());

// Routes
app.use("/api/companies", companyRoutes)
app.use("/api/squat-records", squatRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chalenge", chalengeRoute)


app.get('/test', (req, res) => {
    return res.status(200).json("hello from back-end squat counter app")
})

// start the server
app.listen(8800, ()=> {
    connectDB()
    console.log("connected to bakcend")
})