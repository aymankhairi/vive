import { q } from "framer-motion/m";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/Product";
import SlideProductsLoading from "../../components/slideProducts/SlideProductsLoading";
import { IoIosSearch } from "react-icons/io";

function SearchResults() {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("Search Error :", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);
  return (
    <PageTransition key={query}>
      <div className="category_products">
        {loading ? (
          <SlideProductsLoading key={query} />
        ) : results.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>Results For :{query} </h2>
            </div>
            <div className="products">
              {results.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="no_results">
              <h3>
                No results found
                <IoIosSearch />
              </h3>
              <p>
                We couldn’t find anything for "<span>{query}</span>".
              </p>
              <p className="hint">Try different keywords or check for typos.</p>
              <button
                className="btn_back"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default SearchResults;
