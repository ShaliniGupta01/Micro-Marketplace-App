import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload(); // refresh navbar
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🛍 MicroMarket</Link>
      </div>

      <div className="navbar-links">
        {!token ? (
          <>
            <Link
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </Link>

            <Link
              to="/register"
              className={location.pathname === "/register" ? "active" : ""}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
            >
              Products
            </Link>

            <Link
              to="/add-product"
              className={location.pathname === "/add-product" ? "active" : ""}
            >
              Add Product
            </Link>

            <button onClick={logoutHandler} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
