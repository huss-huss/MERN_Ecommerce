import express from 'express';
import {
  getAllAddresses,
  getAddressById,
  addAddress,
  updateAddress,
  deleteAddress
} from '../controllers/address.js';

const router = express.Router();

router.get('/addresses', getAllAddresses);
router.get('/addresses/:id', getAddressById);
router.post('/addresses', addAddress);
router.put('/addresses/:id', updateAddress);
router.delete('/addresses/:id', deleteAddress);

export default router;
