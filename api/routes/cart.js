import express from "express"
const router = express.Router()


import {
  getAllCartItems,
  getCartItem,
  addCartItem,
  updateCartItem,
  deleteCartItem,
} from "../controllers/cart.js";


router.get("/carts", getAllCartItems);
router.get("/carts/:id", getCartItem);
router.post("/carts/:id/items", addCartItem);
router.put("/carts/:id/items/:itemId", updateCartItem);
router.delete("/carts/:id/items/:itemId", deleteCartItem);

export default router