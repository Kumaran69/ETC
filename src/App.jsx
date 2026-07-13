import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/products" element={<Products />} />

      <Route path="/categories" element={<Categories />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
}

export default App;