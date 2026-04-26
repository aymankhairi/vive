import React, { useContext } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const {
    cartItems,
    addToCart,
    addToFav,
    removeFromFav,
    favoriteItems,
    removeFromCart,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const isInFav = favoriteItems.some((i) => i.id === product.id);
  const handleAddToFav = () => {
    if (isInFav) {
      removeFromFav(product.id);
      toast.error(
        <div className="toast-wrapper">
          <img src={product.images[0]} alt="" className="toast-img" />
          <div className="toast-content">
            <strong>{product.title}</strong>
            Removed From Your Favorite.
          </div>
        </div>,
        { duration: 3500 },
      );
    } else {
      addToFav(product);
      toast.success(
        <div className="toast-wrapper">
          <img src={product.images[0]} alt="" className="toast-img" />
          <div className="toast-content">
            <strong>{product.title}</strong>
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

  const isInCart = cartItems.some((i) => i.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
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
    removeFromCart(product.id);
    toast.error(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
          Removed From Cart
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
    <div className="details_peritem">
      <h1 className="name">{product.title}</h1>
      <div className="stars">{renderStars(product.rating)}</div>
      <div className="price">{product.price} $</div>
      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5>
        <br />
        <span className="stock">
          Hurry UP! Only {product.stock} Products left in stock.
        </span>
      </h5>
      <button
        className={`btn ${isInCart ? "in-cart" : ""}`}
        onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
      >
        {/* <button
                      className="delete_item"
                      onClick={() => removeFromCart(item.id)}
                    ></button> */}
        {isInCart ? "Delete Item From Cart" : "Add to Cart"}
        <CiShoppingCart />
      </button>
      <div className="icons">
        <span onClick={handleAddToFav} className={`${isInFav ? "in-fav" : ""}`}>
          <CiHeart />
        </span>
        <span>
          <PiShareFatLight />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
