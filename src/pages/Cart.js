import React from "react";
import { Link } from "react-router-dom";
import { BiSolidHomeSmile } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";

const Cart = () => {
  return (
    <div className="w-full min-h-[80vh] px-16 py-10 space-y-10">
      <div className="w-fit h-fit flex space-x-3">
        <Link to="/">
          <BiSolidHomeSmile className="text-3xl text-gray-900" />
        </Link>
        <span className="font-bold text-xl text-gray-900">|</span>
        <GiFullPizza className="text-3xl text-red-500" />
      </div>
      <div className="w-full flex">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
