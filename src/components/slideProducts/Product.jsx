import React, { useContext } from "react";
import { FaStar, FaStarHalfAlt, FaShare, FaRegStar } from "react-icons/fa";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

function Product({ item }) {
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    addToFav,
    removeFromFav,
    favoriteItems,
    removeFromCart,
  } = useContext(CartContext);
  const isInCart = cartItems.some((i) => i.id === item.id);
  const isInFav = favoriteItems.some((i) => i.id === item.id);
  const handleAddToFav = () => {
    if (isInFav) {
      removeFromFav(item.id);
      toast.error(
        <div className="toast-wrapper">
          <img src={item.images[0]} alt="" className="toast-img" />
          <div className="toast-content">
            <strong>{item.title}</strong>
            Removed From Your Favorite.
          </div>
        </div>,
        { duration: 3500 },
      );
    } else {
      addToFav(item);
      toast.success(
        <div className="toast-wrapper">
          <img src={item.images[0]} alt="" className="toast-img" />
          <div className="toast-content">
            <strong>{item.title}</strong>
            Added To Your Favorite.
            <div>
              <button className="btn" onClick={() => navigate("/fav")}>
                View Favorite
              </button>
            </div>
          </div>
        </div>,
        { duration: 3500 },
      );
    }
  };
  const handleAddToCart = () => {
    addToCart(item);
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          Added To Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };
  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
    toast.error(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          Removed From Cart
          <div>
            <button
              className="btn"
              onClick={() => {
                navigate("/cart");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };
  const renderStars = (rating, maxStars = 5) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };
  return (
    <Link to={`/products/${item.id}`}>
      <div className={`product ${isInCart ? "in-cart" : ""}`}>
        <button className="status_cart">
          <FaCheck /> in cart
        </button>
        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">{renderStars(item.rating)}</div>
        <p className="price">
          <span className="price_color">{item.price} $</span>
        </p>

        <div className="icons">
          <span
            className="btn_addtocart"
            onClick={(e) => {
              e.preventDefault(); // ⛔ prevent navigation
              isInCart ? handleRemoveFromCart() : handleAddToCart();
            }}
          >
            <CiShoppingCart />
          </span>
          <span
            onClick={(e) => {
              e.preventDefault(); // ⛔ prevent navigation
              handleAddToFav();
            }}
            className={`${isInFav ? "in-fav" : ""}`}
          >
            <CiHeart />
          </span>
          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
