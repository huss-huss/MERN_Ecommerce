import express from "express";
const router = express.Router()

import {
  getAllReviews,
  getReviewById,
  addReview,
  updateReview,
  deleteReview,
} from "../controllers/review.js";

router.get("/reviews", getAllReviews);
router.get("/reviews/:id", getReviewById);
router.post("/reviews", addReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);


export default router