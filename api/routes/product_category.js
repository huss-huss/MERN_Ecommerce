import express from "express"
const router = express.Router()

import {
  getAllProductCategories,
  getProductCategoryById,
  addProductCategory,
  updateProductCategory,
  deleteProductCategory,
} from "../controllers/product_category.js";


router.get("/product-categories", getAllProductCategories);
router.get("/product-categories/:id", getProductCategoryById);
router.post("/product-categories", addProductCategory);
router.put("/product-categories/:id", updateProductCategory);
router.delete("/product-categories/:id", deleteProductCategory);

export default router