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
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import Sidebar from "./components/MyAccounts/sidebar.jsx";
import Myaccount from "./components/MyAccounts/index.jsx";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const location = useLocation();

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const hideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/myaccount");

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && (
        <Header
          cartVisible={cartVisible}
          toggleCartVisibility={toggleCartVisibility}
        />
      )}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/Shop" element={<ShopPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myaccount/*" element={<Myaccount />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
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
