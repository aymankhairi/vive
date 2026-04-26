import React, { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const boxRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestions([]);
  };
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        const data = await res.json();
        setSuggestions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Suggestions Error :", error);
        setSuggestions([]);
      }
    };
    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchTerm]);
  useEffect(() => {
    setSuggestions([]);
  }, [location]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="searchboxcontainer" ref={boxRef}>
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search For Products"
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" onClick={() => window.scrollTo(0, 0)}>
          <IoIosSearch />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li key={item.id}>
              <Link
                to={`/products/${item.id}`}
                className="suggestion_link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={item.images[0]} alt="" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
