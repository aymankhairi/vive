import React from "react";
import PageTransition from "../../components/PageTransition";
import "../../css/ordersuccess.css";
import { useLocation, useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;
  if (!order) {
    return <p>No order found</p>;
  }
  // fake order id (makes it feel real)
  //   const orderId = "ORD-" + Math.floor(Math.random() * 1000000);

  return (
    <PageTransition>
      <div className="success_page">
        <div className="success_card">
          <div className="success_icon">🎉</div>

          <h1>Order Confirmed</h1>

          <p className="success_text">
            Thank you! Your order has been placed successfully.
          </p>

          <div className="order_info">
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Total: </strong>
              {order.total.toFixed(2)} $
            </p>

            <p>
              <strong>Delivery:</strong> 3–5 business days
            </p>
          </div>

          <div className="success_buttons">
            <button onClick={() => navigate("/")}>Continue Shopping</button>

            <button className="secondary" onClick={() => navigate("/orders")}>
              View My Order
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default OrderSuccess;
