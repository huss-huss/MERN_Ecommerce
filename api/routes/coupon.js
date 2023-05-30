import express from "express"
const router = express.Router()

import {
  applyCoupon,
  getAllCoupons,
  getCouponById,
  addCoupon,
  updateCoupon,
  deleteCoupon,
} from "../controllers/coupon.js";

router.get("/coupons", getAllCoupons);
router.get("/coupons/:id", getCouponById);
router.post("/coupons/apply", applyCoupon);
router.post("/coupons", addCoupon);
router.put("/coupons/:id", updateCoupon);
router.delete("/coupons/:id", deleteCoupon);

export default router