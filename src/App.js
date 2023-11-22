import React from "react";
import "./App.css";
import PizzaState from "./context/PizzaState";
import CartState from "./context/CartState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <PizzaState>
      <CartState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<SingleProduct />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartState>
    </PizzaState>
  );
};

export default App;
