const express = require("express");
const router = express.Router();
const {
  addFavorite,
  removeFavorite
} = require("../controllers/favoriteController");
const { protect } = require("../middleware/authMiddleware");

router.post("/:productId", protect, addFavorite);
router.delete("/:productId", protect, removeFavorite);

module.exports = router;
