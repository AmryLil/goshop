import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";

import MainContent from "./components/Home/index.jsx";
import ShopPages from "./components/Shop/index.jsx";
import Header from "./components/Navbar/index.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/MyAccounts/sidebar.jsx";
import Myaccount from "./components/MyAccounts/index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ShoppingCart from "./pages/Cart.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CheckoutPage from "./pages/Checkout.jsx";
import OrderHistory from "./pages/Orders.jsx";

const App = () => {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/cart" ||
    location.pathname.startsWith("/checkout") ||
    location.pathname.startsWith("/myaccount");

  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        {!hideHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPages />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/myaccount/*" element={<Myaccount />} />
          <Route path="/product/:id*" element={<ProductPage />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </CartProvider>
    </div>
  );
};

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
