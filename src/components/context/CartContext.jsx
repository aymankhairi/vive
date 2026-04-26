import React, { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  //Favorite

  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFav = localStorage.getItem("favoriteItems");
    return savedFav ? JSON.parse(savedFav) : [];
  });

  //REMOVE FROM Favorite
  const removeFromFav = (id) => {
    setFavoriteItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };
  //ADD TO Favorite
  const addToFav = (item) => {
    setFavoriteItems((prevItems) => {
      if (prevItems.some((i) => i.id === item.id)) return prevItems;
      return [...prevItems, item];
    });
  };
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  //Cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  //DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };
  //REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  //ADD TO CART
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };
  //Clear Cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };
  //Save Cart Local
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  //save History Prev Odrer Local
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });
  const addOrder = (cartItems, total) => {
    const newOrder = {
      id: "ORD-" + Date.now(),
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
      status: "Processing",
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder; // optional but useful
  };
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        favoriteItems,
        addToFav,
        removeFromFav,
        clearCart,
        addOrder,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
