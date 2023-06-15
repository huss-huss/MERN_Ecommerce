import express from 'express';
import {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory
} from '../controllers/category.js';

const router = express.Router();

router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.post('/categories', addCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;
