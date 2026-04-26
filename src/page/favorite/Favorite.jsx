import React, { useContext } from "react";
import PageTransition from "../../components/PageTransition";
import { CartContext } from "../../components/context/CartContext";
import Product from "../../components/slideProducts/Product";

function Favorite() {
  const { favoriteItems } = useContext(CartContext);
  return (
    <PageTransition>
      <div className="category_products FavoritesPage">
        <div className="container">
          <div className="top_slide">
            <h2>Your Favorites Items</h2>
          </div>
          {favoriteItems.length === 0 ? (
            <p>No Favorite Items Yet.</p>
          ) : (
            <div className="products">
              {favoriteItems.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Favorite;
