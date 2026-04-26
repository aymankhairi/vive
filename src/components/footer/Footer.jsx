import React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* BRAND */}
        <div className="footer_box">
          <h2>vive</h2>
          <p>
            Your one-stop shop for fashion,
            <br /> accessories, and lifestyle products. Fast delivery, best
            prices and trusted quality.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer_box">
          <h3>Quick Links</h3>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
            About
          </Link>
          {/* <Link to="/accessories" onClick={() => window.scrollTo(0, 0)}>Shop</Link> */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            Contact
          </Link>
        </div>

        {/* SUPPORT */}
        <div className="footer_box">
          <h3>Support</h3>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Privacy Policy</p>
        </div>

        {/* CONTACT */}
        <div className="footer_box">
          <h3>Contact</h3>
          <p>Email: support@vive.com</p>
          <p>Phone: +31 123 456 789</p>
          <p>Rotterdam, Netherlands</p>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} vive. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
