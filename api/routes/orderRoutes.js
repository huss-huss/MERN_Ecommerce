import express from 'express';
import {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder
} from '../controllers/order.js';

const router = express.Router();

router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', addOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;
