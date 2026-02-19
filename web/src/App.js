import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";

function App() {
 const [token, setToken] = React.useState(localStorage.getItem("token"));

React.useEffect(() => {
  setToken(localStorage.getItem("token"));
}, []);


  return (
    <Router>
      <Navbar />
      <Routes>

        {/* Home Route */}
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/add-product"
          element={token ? <AddProduct /> : <Navigate to="/login" />}
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/products"
          element={token ? <Products /> : <Navigate to="/login" />}
        />

        <Route
          path="/product/:id"
          element={token ? <ProductDetail /> : <Navigate to="/login" />}
        />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
