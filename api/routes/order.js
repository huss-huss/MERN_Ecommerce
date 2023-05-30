import express from "express"
const router = express.Router()


import {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.js";

router.get("/orders", getAllOrders);
router.get("/orders/:id", getOrderById);
router.post("/orders", addOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router