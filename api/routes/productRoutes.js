import express from 'express';
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
