import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";

function ProductCard({ product }) {
  const [fav, setFav] = useState(false);

  const toggleFavorite = async () => {
    if (fav) {
      await axios.delete(`/favorites/${product._id}`);
    } else {
      await axios.post(`/favorites/${product._id}`);
    }
    setFav(!fav);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
        className={`heart ${fav ? "active" : ""}`}
        onClick={toggleFavorite}
      >
        ♥
      </button>

      <Link to={`/product/${product._id}`}>View</Link>
    </div>
  );
}

export default ProductCard;
