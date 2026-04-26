import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/home";
import Cart from "./page/cart/Cart";
import ProductDetails from "./page/productDetails/ProductDetails";
import { Toaster } from "react-hot-toast";
// import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchResults from "./page/search/SearchResults";
import Favorite from "./page/favorite/Favorite";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrolToTop";
import OrderSuccess from "./page/cart/OrderSuccess";
import OrderHistory from "./page/cart/OrderHistory";
function App() {
  return (
    <>
      <header>
        <TopHeader></TopHeader>
        <BtmHeader></BtmHeader>
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <AnimatePresence mode="wait">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/fav" element={<Favorite />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
