/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProducts();
  }, [search, page]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?search=${search}&page=${page}&limit=6`
      );
      setProducts(data.products);
      setPages(data.pages);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      await axios.post(
        `/favorites/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Favorite updated ❤️");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>🛍 Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
      />

      <div className="grid">
        {products.map((product) => (
          <div key={product._id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>

            <div className="buttons">
              <Link to={`/product/${product._id}`} className="view-btn">
                View
              </Link>

              <button
                className="fav-btn"
                onClick={() => toggleFavorite(product._id)}
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(pages).keys()].map((x) => (
          <button
            key={x + 1}
            onClick={() => setPage(x + 1)}
            className={page === x + 1 ? "active" : ""}
          >
            {x + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
