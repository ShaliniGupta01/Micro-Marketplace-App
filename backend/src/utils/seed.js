require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Product = require("../models/Product");

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {
  await User.deleteMany();
  await Product.deleteMany();

  const hashedPassword = await bcrypt.hash("123456", 10);

  const users = await User.insertMany([
    { name: "User One", email: "user1@test.com", password: hashedPassword },
    { name: "User Two", email: "user2@test.com", password: hashedPassword }
  ]);

  const products = Array.from({ length: 10 }).map((_, i) => ({
    title: `Product ${i + 1}`,
    price: (i + 1) * 10,
    description: `Description for product ${i + 1}`,
    image: "https://via.placeholder.com/150"
  }));

  await Product.insertMany(products);

  console.log("Seed Data Inserted");
  process.exit();
};

seed();
