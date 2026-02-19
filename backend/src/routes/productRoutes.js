const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");
const { productValidation } = require("../validations/productValidation");

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", protect, productValidation, validate, createProduct);
router.put("/:id", protect, productValidation, validate, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;
