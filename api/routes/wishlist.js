import express from "express"
const router = express.Router();

import {
  getAllWishlistItems,
  getWishlistItemById,
  addWishlistItem,
  updateWishlistItem,
  deleteWishlistItem,
} from "../controllers/wishlist.js";




router.get("/wishlists", getAllWishlistItems);
router.get("/wishlists/:id", getWishlistItemById);
router.post("/wishlists/:id/items", addWishlistItem);
router.put("/wishlists/:id/items/:itemId", updateWishlistItem);
router.delete("/wishlists/:id/items/:itemId", deleteWishlistItem);

export default router;
