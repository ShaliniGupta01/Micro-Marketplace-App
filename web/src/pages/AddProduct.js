import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/products",
        { title, price, description, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product Added Successfully ✅");
      navigate("/products");
    } catch (error) {
      alert("Error adding product");
    }
  };

  return (
    <div className="container">
      <h2>Add Product</h2>

      <form onSubmit={submitHandler} className="auth-form">
        <input
          type="text"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          required
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          required
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
