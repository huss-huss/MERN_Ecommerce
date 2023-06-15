import express from 'express';
import {
  getAllWishlistItems,
  getWishlistItemById,
  addWishlistItem,
  deleteWishlistItem
} from '../controllers/wish_list_item.js';

const router = express.Router();

router.get('/wishlist-items', getAllWishlistItems);
router.get('/wishlist-items/:id', getWishlistItemById);
router.post('/wishlist-items', addWishlistItem);
router.delete('/wishlist-items/:id', deleteWishlistItem);

export default router;
