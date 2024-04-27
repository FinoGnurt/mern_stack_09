import React from "react";
import { Counter } from "./features/counter/Counter";
import ProductList from "./features/product-list/ProductList";
import "./index.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./features/card/Card";
import Checkout from "./pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
