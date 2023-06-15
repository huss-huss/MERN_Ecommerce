import express from 'express';
import {
  getAllOrderStatuses,
  getOrderStatusById,
  addOrderStatus,
  updateOrderStatus,
  deleteOrderStatus
} from '../controllers/order_status.js';

const router = express.Router();

router.get('/order-statuses', getAllOrderStatuses);
router.get('/order-statuses/:id', getOrderStatusById);
router.post('/order-statuses', addOrderStatus);
router.put('/order-statuses/:id', updateOrderStatus);
router.delete('/order-statuses/:id', deleteOrderStatus);

export default router;
