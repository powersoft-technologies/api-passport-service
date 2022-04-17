import express from "express";
import asyncHandler from "express-async-handler";
import { TicketsController } from "../controllers/tickets.controller";
import { currentUser } from "../middlewares/current-user";

const router = express.Router();

const ticketsController = new TicketsController
router.post('/update',currentUser, asyncHandler(ticketsController.updateTickets));

export { router as ticketsRoute };
