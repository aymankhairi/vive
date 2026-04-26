import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import PageTransition from "../../components/PageTransition";
import "../../css/orders.css";

function OrderHistory() {
  const { orders } = useContext(CartContext);

  return (
    <PageTransition>
      <div className="orders_page">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <p className="empty">No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order_card">
              <div className="order_top">
                <h3>{order.id}</h3>
                <span>{order.date}</span>
              </div>

              <p>Status: {order.status}</p>

              <p>
                <p>Delivery: 3–5 business days</p>
                Total: <strong>{order.total.toFixed(2)} $</strong>
              </p>

              <div className="items_list">
                {order.items.map((item) => (
                  <div key={item.id} className="order_item">
                    <img src={item.images[0]} alt="" />
                    <span>{item.title}</span>
                    <span>x{item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </PageTransition>
  );
}

export default OrderHistory;
