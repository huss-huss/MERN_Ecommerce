import express from 'express';
import {
  getAllShoppingCartItems,
  getShoppingCartItemById,
  addShoppingCartItem,
  updateShoppingCartItem,
  deleteShoppingCartItem
} from '../controllers/shopping_cart_item.js';

const router = express.Router();

router.get('/shopping-cart-items', getAllShoppingCartItems);
router.get('/shopping-cart-items/:id', getShoppingCartItemById);
router.post('/shopping-cart-items', addShoppingCartItem);
router.put('/shopping-cart-items/:id', updateShoppingCartItem);
router.delete('/shopping-cart-items/:id', deleteShoppingCartItem);

export default router;
