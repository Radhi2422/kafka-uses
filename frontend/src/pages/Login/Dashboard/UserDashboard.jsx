import React from "react";
import "./UserDashboard.css";
import { useNavigate } from "react-router-dom";

const categories = [
  "Electronics",
  "Mobiles",
  "Laptops",
  "Accessories",
  "Fashion",
  "Home",
];

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          ShopEase
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Categories</a>
          <a href="/">Contact</a>
        </div>

        <div className="nav-right">

          <input
            type="text"
            placeholder="Search products..."
            className="search-box"
          />

          <button className="cart-btn">
            🛒 Cart
          </button>

          <button className="order-btn" 
          onClick={() => navigate("/dashboard-problem")}
      style={{ cursor: "pointer" }}>
            Orders
          </button>

          <button className="profile-btn">
            Profile
          </button>

          <button className="logout-btn">
            Logout
          </button>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Discover Amazing Products
          </h1>

          <p>
            Shop thousands of products with the best quality and
            unbeatable prices.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

        </div>

        <div className="hero-right">
          📦
        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <section className="search-section">

        <h2>Search Products</h2>

        <div className="search-wrapper">

          <input
            type="text"
            placeholder="Search by name..."
          />

          <button>
            Search
          </button>

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="category-section">

        <h2>Browse Categories</h2>

        <div className="category-grid">

          {categories.map((category, index) => (

            <div
              className="category-card"
              key={index}
            >
              <h3>{category}</h3>

              <p>
                Explore {category} products
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Featured Products will be added in Part 2 */}

    </div>
  );
};

export default UserDashboard;