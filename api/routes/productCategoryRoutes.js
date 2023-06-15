import express from 'express'
import {
  getAllProductCategories,
  getProductCategoryById,
  addProductCategory,
  updateProductCategory,
  deleteProductCategory,
} from '../controllers/product_category.js'

const router = express.Router()

router.get('/categories', getAllProductCategories)
router.get('/categories/:id', getProductCategoryById)
router.post('/categories', addProductCategory)
router.put('/categories/:id', updateProductCategory)
router.delete('/categories/:id', deleteProductCategory)

export default router
