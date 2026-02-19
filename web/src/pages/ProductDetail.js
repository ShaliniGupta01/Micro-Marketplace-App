/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.image} width="300" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  );
}

export default ProductDetail;
