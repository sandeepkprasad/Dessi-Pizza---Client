import React from "react";

const PizzaItem = ({ product }) => {
  return (
    <div className="text-center space-y-3">
      <img
        src={product.image}
        alt="pizza"
        className="w-[300px] h-auto transition-transform hover:rotate-180"
      />
      <p className="font-bold text-lg text-red-900">{product.title}</p>
      <p className="font-bold text-lg text-gray-900">₹{product.price[0]}</p>
      <p className="font-semibold text-base text-gray-900">
        {product.description}
      </p>
    </div>
  );
};

export default PizzaItem;
