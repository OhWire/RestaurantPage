// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services.jsx";
import Banner from "./components/Banner.jsx";
import AppStore from "./components/Appstore.jsx";
import CoverBanner from "./components/CoverBanner.jsx";
import Testimonial from "./components/testimonial.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import FoodMenu from "./components/FoodMenu.jsx";

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ));
    }
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="max-w-screen overflow-x-hidden bg-white dark:bg-gradient-to-r from-primary to-secondary bg-opacity-25 dark:text-white duration-200">
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero cartItems={cartItems} />
              <Services />
              <Banner />
              <CoverBanner/>
              <Testimonial />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shoppingcart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/foodmenu" element={<FoodMenu cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
