import React from "react";
import "./App.css";
import Header from './components/layouts/Header.jsx';
import Home from "./components/layouts/Home.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Menu from "./components/layouts/Menu.jsx";
import Cart from "./components/cart/Cart.jsx"

export default function App() {
  return (
  <div className="App">
    <Header />
    <div className="container container-fluid">
    <Home />
    {/* <Menu /> */}
    </div>
    {/* <div>
      <Cart />
    </div>
    <Footer /> */}
  </div>
);
}
