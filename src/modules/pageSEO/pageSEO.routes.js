import express from "express";
import {
  createPageSEO,
  getAllPageSEO,
  getPageSEOById,
  updatePageSEO,
  deletePageSEO,
} from "./pageSEO.controller.js";

const router = express.Router();

// Create
router.post("/create", createPageSEO);

// Get All
router.get("/", getAllPageSEO);

// Get By Id
router.get("/:id", getPageSEOById);

// Update
router.put("/:id", updatePageSEO);

// Delete
router.delete("/:id", deletePageSEO);

export default router;