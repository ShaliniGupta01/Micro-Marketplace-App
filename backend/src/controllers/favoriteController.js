const User = require("../models/User");

exports.addFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user.favorites.includes(req.params.productId)) {
      user.favorites.push(req.params.productId);
      await user.save();
    }

    res.json({ message: "Product added to favorites" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.favorites = user.favorites.filter(
      (id) => id.toString() !== req.params.productId
    );

    await user.save();

    res.json({ message: "Product removed from favorites" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
