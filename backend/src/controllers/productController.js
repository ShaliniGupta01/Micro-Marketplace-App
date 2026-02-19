const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

// exports.getProducts = async (req, res) => {
//   const { search = "", page = 1, limit = 5 } = req.query;

//   const query = {
//     title: { $regex: search, $options: "i" }
//   };

//   const products = await Product.find(query)
//     .skip((page - 1) * limit)
//     .limit(Number(limit));

//   const total = await Product.countDocuments(query);

//   res.json({
//     products,
//     total,
//     page: Number(page),
//     pages: Math.ceil(total / limit)
//   });
// };

exports.getProducts = async (req, res) => {
  try {
    // Query params
    const search = req.query.search || "";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    // Build search query
    const query = {
      title: { $regex: search, $options: "i" }
    };

    // Count total matching products
    const total = await Product.countDocuments(query);

    // Fetch paginated products
    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      totalProducts: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      products,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};
