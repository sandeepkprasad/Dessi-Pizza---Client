import React from "react";
import pizza1 from "../assests/pizza-1.png";

const Hero = () => {
  return (
    <div className="w-full h-[75vh] bg-sky-700">
      <div className="w-full h-full flex justify-around items-center">
        <div className="w-fit h-fit space-y-3">
          <h2 className="font-bold text-white text-4xl">HOT AND FRESH PIZZA</h2>
          <p className="font-bold text-gray-950 text-3xl">
            ORDER NOW AND GET <span className="text-red-700">20%</span> OFF
          </p>
        </div>
        <div className="w-fit h-fit">
          <img
            src={pizza1}
            alt="pizza"
            className="w-[400px] h-fit transition-transform hover:rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
