import React, { useContext, useState } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "../../css/cart.css";
import PageTransition from "../../components/PageTransition";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    addOrder,
  } = useContext(CartContext);

  const [loadingOrder, setLoadingOrder] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoadingOrder(true);

    // fake API delay (realistic UX)
    await new Promise((res) => setTimeout(res, 1500));
    // SAVE ORDER HERE
    // addOrder(cartItems, total);
    const newOrder = addOrder(cartItems, total);

    clearCart();

    toast.success("Order placed successfully 🎉");

    setLoadingOrder(false);

    setTimeout(() => {
      navigate("/ordersuccess", {
        state: { order: newOrder },
      });
    }, 500);
  };

  return (
    <PageTransition>
      <div className="checkout">
        <div className="ordersummary">
          <h1 className="cartname">Cart</h1>

          <div className={`items ${cartItems.length === 1 ? "single" : ""}`}>
            {cartItems.length === 0 ? (
              <div className="empty_cart">
                <h3>Your cart is empty 🛒</h3>
                <p>Start adding products to see them here.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="item_carts"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="item_cart">
                    <div className="image_name">
                      <div className="image_item">
                        <img src={item.images[0]} alt={item.title} />
                      </div>

                      <div className="content">
                        <h3>{item.title}</h3>
                        <p className="price_item">{item.price} $</p>

                        <div className="quantity_control">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>

                          <span className="quantity">{item.quantity}</span>

                          <button onClick={() => increaseQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      className="delete_item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <div className="bottom_summary">
            <div className="shop_table">
              <p>Total:</p>
              <span className="total_checkout">{total.toFixed(2)} $</span>
            </div>

            <div className="button_div">
              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={loadingOrder}
              >
                {loadingOrder ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
