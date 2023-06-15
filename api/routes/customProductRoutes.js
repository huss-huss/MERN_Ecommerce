import express from 'express';
import {
  getAllCustomProducts,
  getCustomProductById,
  createCustomProduct,
  updateCustomProduct,
  deleteCustomProduct
} from '../controllers/custom_product.js';

const router = express.Router();

router.get('/custom-products', getAllCustomProducts);
router.get('/custom-products/:id', getCustomProductById);
router.post('/custom-products', createCustomProduct);
router.put('/custom-products/:id', updateCustomProduct);
router.delete('/custom-products/:id', deleteCustomProduct);

export default router;
