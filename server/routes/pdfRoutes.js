import express from "express";
import { generatePDF } from "../controllers/pdfController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, generatePDF);

export default router;
