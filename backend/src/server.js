require("dotenv").config({ quiet: true });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");

connectDB();

const app = express();

/* ================= CORS CONFIG ================= */
app.use(
  cors({
    origin: [
      "http://localhost:8081",
      "http://localhost:19006",
      "http://localhost:3000",
      "https://micro-marketplace-app.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

/* ================= Root Route ================= */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "🚀 Micro Marketplace Backend is Live!",
  });
});

/* ================= Routes ================= */
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/favorites", favoriteRoutes);

/* ================= Error Handler ================= */
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
