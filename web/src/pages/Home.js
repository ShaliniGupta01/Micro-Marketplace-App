/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "../api/axios";
import electronicsTips from "../assets/images/tips.jpg";
import fashionTrends from "../assets/images/fashion tips.jpg";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [search, page]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?search=${search}&page=${page}&limit=6`
      );
      setProducts(data.products);
      setPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Find the best products and deals tailored for you!</p>
        <button className="hero-btn">Shop Now</button>
      </section>

      {/* Search */}
      <div className="search-box">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">Electronics</div>
          <div className="category-card">Clothing</div>
          <div className="category-card">Home & Garden</div>
          <div className="category-card">Books</div>
          <div className="category-card">Sports</div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      {/* All Products Section */}
      <section className="all-products">
        <h2>Explore Products</h2>
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((p) => <ProductCard key={p._id} product={p} />)
          ) : (
            <p className="no-data">No products found</p>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get updates on the latest products and offers</p>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Amazing products and fast delivery!"</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"Great quality at affordable prices."</p>
            <h4>- John Smith</h4>
          </div>
        </div>
      </section>

<section className="blog-section">
  <h2>Latest Tips & Articles</h2>
  <div className="blog-grid">
    <div className="blog-card">
      <img src={electronicsTips} alt="Electronics Tips" className="blog-img" />
      <h3>5 Tips to Choose the Best Electronics</h3>
      <p>Learn how to pick electronics that last and deliver value.</p>
      <a href="#" className="blog-link">Read More →</a>
    </div>
    <div className="blog-card">
      <img src={fashionTrends} alt="Fashion Trends" className="blog-img" />
      <h3>Top Fashion Trends 2026</h3>
      <p>Stay ahead with the latest clothing and style trends.</p>
      <a href="#" className="blog-link">Read More →</a>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
