import React, { useEffect, useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  // { title: "Accessories", link: "/accessories" },
  // { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
  { title: "Orders", link: "/orders" },
];

function BtmHeader() {
  const menuRef = useRef();
  const categoryRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }

      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="btm_header">
        <div className="container">
          <nav className="nav">
            <div ref={categoryRef} className="category_nav">
              <div
                className="category_btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCategoryOpen(!isCategoryOpen);
                }}
              >
                <div
                  className="mobile_menu_btn"
                  onClick={(e) => {
                    {
                      e.stopPropagation();
                      setMenuOpen(!menuOpen);
                    }
                  }}
                >
                  <FiMenu />
                </div>
                <p style={{ paddingLeft: "100px" }}>Browse Category</p>
              </div>
              <div
                className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}
              >
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`category/${category.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div
              ref={menuRef}
              className={`nav_links ${menuOpen ? "active" : ""}`}
            >
              {NavLinks.map((item) => (
                <Link
                  to={item.link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                >
                  <li
                    key={item.link}
                    // className={location.pathname === item.link ? "active" : ""}
                    className={`nav_item ${location.pathname === item.link ? "active" : ""}`}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </div>
          </nav>
          {/* <div className="sign_regs_icon">
            <Link to="/">
              <PiSignInBold />
            </Link>
            <Link to="/">
              <FaUserPlus />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
