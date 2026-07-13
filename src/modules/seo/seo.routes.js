import express from "express";
import {
  getSEO,
  updateSEO,
} from "./seo.controller.js";

const router = express.Router();

// Get SEO Settings
router.get("/", getSEO);

// Update SEO Settings
router.put("/", updateSEO);

export default router;