import express from "express";
import asyncHandler from "express-async-handler";
import { AuthController } from "../controllers/auth.controller";

const router = express.Router();

const authController = new AuthController
router.post('/signup', asyncHandler(authController.signUp));
router.post('/signin', asyncHandler(authController.signInAuthenticate));
router.post('/signout', asyncHandler(authController.signOut));

export { router as authRoute };
