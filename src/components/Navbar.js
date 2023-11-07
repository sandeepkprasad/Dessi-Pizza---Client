import React from "react";
import { BiSolidPhoneCall, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-sky-700">
      <div className="w-full h-full flex justify-between items-center px-10">
        <div className="flex items-center space-x-3">
          <BiSolidPhoneCall className="text-white text-4xl" />
          <div className="text-white">
            <p className="text-xs font-semibold">ORDER NOW!</p>
            <Link to="tel:+91 12345 67890" className="text-lg font-bold">
              +91 12345 67890
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-items">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="nav-items">
              <Link to="/events">Events</Link>
            </li>
            <li className="nav-items">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-items">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <BiCart className="text-3xl text-white" />
          <span className="flex justify-center items-center relative right-3 bottom-1 font-bold text-sky-700 w-5 h-5 rounded-full bg-white p-1">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
