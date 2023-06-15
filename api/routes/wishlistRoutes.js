import express from 'express';
import {
  getAllWishlists,
  getWishlistById,
  createWishlist,
  updateWishlist,
  deleteWishlist
} from '../controllers/wishlist.js';

const router = express.Router();

router.get('/wishlists', getAllWishlists);
router.get('/wishlists/:id', getWishlistById);
router.post('/wishlists', createWishlist);
router.put('/wishlists/:id', updateWishlist);
router.delete('/wishlists/:id', deleteWishlist);

export default router;
