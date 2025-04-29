import express from "express";
import generateContent from "../controller/gemini-controller.js";

const router = express.Router();

router.post("/generate", generateContent); 

export default router;
