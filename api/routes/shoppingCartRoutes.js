import express from 'express';
import {
  getAllShoppingCarts,
  getShoppingCartById,
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart
} from '../controllers/shopping_cart.js';

const router = express.Router();

router.get('/shopping-carts', getAllShoppingCarts);
router.get('/shopping-carts/:id', getShoppingCartById);
router.post('/shopping-carts', createShoppingCart);
router.put('/shopping-carts/:id', updateShoppingCart);
router.delete('/shopping-carts/:id', deleteShoppingCart);

export default router;
