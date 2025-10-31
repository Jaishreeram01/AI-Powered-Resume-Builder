import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/UserRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Database connection
await connectDB()

//All the request will be passed as json
app.use(express.json())
app.use(cors())

//when the home route is hit it creates the appropriate response
app.get('/', (req, res)=> res.send("Server is live..."))
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

//start the express application
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
