import express from 'express';
import {
  getAllProductCategoryMappings,
  getProductCategoryMappingById,
  createProductCategoryMapping,
  updateProductCategoryMapping,
  deleteProductCategoryMapping
} from '../controllers/productCategoryMapping.js';

const router = express.Router();

router.get('/product-category-mappings', getAllProductCategoryMappings);
router.get('/product-category-mappings/:id', getProductCategoryMappingById);
router.post('/product-category-mappings', createProductCategoryMapping);
router.put('/product-category-mappings/:id', updateProductCategoryMapping);
router.delete('/product-category-mappings/:id', deleteProductCategoryMapping);

export default router;
