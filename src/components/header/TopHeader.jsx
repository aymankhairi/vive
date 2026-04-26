import React, { useContext } from "react";
import Logo from "../../img/logo3.png";
import { Link } from "react-router-dom";
import { CiHeart, CiShoppingCart, CiBoxList } from "react-icons/ci";
import "../../css/header.css";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

function TopHeader() {
  const { cartItems, favoriteItems } = useContext(CartContext);
  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="" />
        </Link>
        <SearchBox />
        <div className="header_icons">
          {/* <div className="icons"> */}
          {/* FAVORITES */}
          <Link to="/fav" onClick={() => window.scrollTo(0, 0)}>
            <div className="icon_box">
              <CiHeart />
              <span className="count">{favoriteItems.length}</span>
            </div>
          </Link>
          {/* CART */}
          <div className="icons">
            <Link
              to="/cart"
              className="icon_box"
              id="cart-icon"
              onClick={() => window.scrollTo(0, 0)}
            >
              <CiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
