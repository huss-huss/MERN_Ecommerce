import express from 'express';
import {
  getAllOrderItems,
  getOrderItemById,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem
} from '../controllers/order_item.js';

const router = express.Router();

router.get('/order-items', getAllOrderItems);
router.get('/order-items/:id', getOrderItemById);
router.post('/order-items', addOrderItem);
router.put('/order-items/:id', updateOrderItem);
router.delete('/order-items/:id', deleteOrderItem);

export default router;
