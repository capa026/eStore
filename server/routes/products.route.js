import express from "express";
import { fill, getByCategory } from "../controllers/products.controller.js";

const router = express.Router();

router.post("/fill", fill);
router.get("/:category", getByCategory);
export default router;
