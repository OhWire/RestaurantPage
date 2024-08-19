import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/food-logo.png";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import Darkmode from "./Darkmode";
import VectorMobile from "../assets/vector3.png"; // Import the mobile background image

const Navbar = ({ cartItems }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "text-primary" : "hover:text-primary";
  };

  const hasItemsInCart = cartItems.length > 0;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="shadow-md bg-white dark:bg-dark dark:text-white duration-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
              <img src={Logo} alt="Foodie Zone Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <p className="font-playwrite text-xs sm:text-2xl">Bountiful Bowls</p>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Darkmode />
            <div className="sm:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-2xl">
                {isMobileMenuOpen ? <FaTimesCircle /> : <FaBars />}
              </button>
            </div>
            <ul className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-dark dark:bg-opacity-100 bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center gap-4 text-2xl sm:text-xl font-semibold transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"} sm:translate-y-0 sm:flex-row sm:static sm:bg-transparent sm:dark:bg-transparent`} style={{ backgroundImage: isMobileMenuOpen ? `url(${VectorMobile})` : "none", backgroundSize: "cover", backgroundPosition: "center" }}>
              <li className="sm:hidden absolute top-4 right-4">
                <button onClick={toggleMobileMenu} className="text-2xl">
                  <FaTimesCircle />
                </button>
              </li>
              <li>
                <Link to="/" className={`block py-4 px-4 ${getNavLinkClass("/")}`} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`block py-4 px-4 ${getNavLinkClass("/about")}`} onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`block py-4 px-4 ${getNavLinkClass("/contact")}`} onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/foodmenu" className={`block py-4 px-4 ${getNavLinkClass("/foodmenu")}`} onClick={closeMobileMenu}>
                  Menu
                </Link>
              </li>
              <li className="sm:hidden">
                <Link to={hasItemsInCart ? "/shoppingcart" : "/foodmenu"} className="block py-4 px-4" onClick={closeMobileMenu}>
                  <span className="flex items-center gap-2">
                    {hasItemsInCart ? "Cart" : "Order"}
                    <FaCartShopping className="text-xl text-black dark:text-white drop-shadow-sm cursor-pointer" />
                  </span>
                </Link>
              </li>
            </ul>
            <Link
              to={hasItemsInCart ? "/shoppingcart" : "/foodmenu"}
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2 hidden sm:flex"
            >
              <span>{hasItemsInCart ? "Cart" : "Order"}</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
