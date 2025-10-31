import express from "express";
import { getUserById, loginUser, registerUser } from "../controllers/UserController.js";
import protect from "../middlewares/authMiddleware.js";
import { getUserResumes } from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/loginUser', loginUser);
userRouter.get('/data', protect, getUserById);
userRouter.get('/resumes', protect,getUserResumes)

export default userRouter;