import React from "react";
import "../../css/about.css";

function About() {
  return (
    <div className="about_page">
      {/* HERO */}
      <div className="about_hero">
        <h1>About Our Store</h1>
        <p>
          We deliver high-quality products with fast shipping and trusted
          service.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="about_container">
        {/* LEFT IMAGE / CARD */}
        <div className="about_image animate_left">
          <div className="about_glow"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about_content animate_right">
          <h2>Who We Are</h2>
          <p>
            We are a modern eCommerce platform focused on delivering the best
            shopping experience. From fashion to accessories, we ensure quality,
            affordability, and fast delivery.
          </p>

          <div className="about_points">
            <div>✔ Premium Quality Products</div>
            <div>✔ Fast & Secure Delivery</div>
            <div>✔ 24/7 Customer Support</div>
            <div>✔ Easy Returns & Refunds</div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="about_stats">
        <div className="stat_box">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat_box">
          <h3>5K+</h3>
          <p>Products</p>
        </div>

        <div className="stat_box">
          <h3>99%</h3>
          <p>Positive Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default About;
