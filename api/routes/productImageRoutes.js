import express from 'express'
import {
  getAllProductImages,
  getProductImageById,
  createProductImage,
  updateProductImage,
  deleteProductImage,
} from '../controllers/product_image.js'

const router = express.Router()

router.get('/product-images', getAllProductImages)
router.get('/product-images/:id', getProductImageById)
router.post('/product-images', createProductImage)
router.put('/product-images/:id', updateProductImage)
router.delete('/product-images/:id', deleteProductImage)

export default router
