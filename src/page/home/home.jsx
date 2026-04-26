import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import "../../css/home.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import SlideProductsLoading from "../../components/slideProducts/SlideProductsLoading";
import PageTransition from "../../components/PageTransition";

const categories = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-bags",
  "womens-dresses",
  "womens-shoes",
  "womens-watches",
];
function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <PageTransition>
      <div>
        <HeroSlider />
        {loading
          ? categories.map((category) => (
              <SlideProductsLoading key={category} />
            ))
          : categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTransition>
  );
}

export default Home;
