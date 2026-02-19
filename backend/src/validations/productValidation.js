const { body } = require("express-validator");

exports.productValidation = [
  body("title").notEmpty(),
  body("price").isNumeric(),
  body("description").notEmpty(),
  body("image").notEmpty()
];
