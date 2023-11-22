import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import pizzaContext from "../context/pizzaContext";
import cartContext from "../context/cartContext";
import { BiSolidHomeSmile } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";

const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProduct, singleProduct, isSingleLoading } =
    useContext(pizzaContext);
  const { handleCart } = useContext(cartContext);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchSingleProduct(id);
    // eslint-disable-next-line
  }, []);

  if (isSingleLoading) {
    return (
      <div>
        <h3 className="font-bold text-sky-900 text-2xl">Loading...</h3>
      </div>
    );
  }

  const handleQuantity = (e) => {
    setQuantity(e.target.value);

    if (e.target.value <= 0) {
      setQuantity(1);
    }

    if (e.target.value > 6) {
      setQuantity(6);
    }
  };

  return (
    <div className="w-full px-16 py-10 space-y-10">
      <div className="w-fit h-fit flex space-x-3">
        <Link to="/">
          <BiSolidHomeSmile className="text-3xl text-gray-900" />
        </Link>
        <span className="font-bold text-xl text-gray-900">|</span>
        <GiFullPizza className="text-3xl text-red-500" />
      </div>
      {singleProduct &&
        singleProduct.map((item, index) => {
          return (
            <div className="w-full h-full flex" key={index}>
              <div className="w-1/2 flex justify-center">
                <img src={item.image} alt="pizza" />
              </div>
              <div className="w-1/2 space-y-5">
                <h4 className="font-bold text-3xl text-gray-900">
                  {item.title}
                </h4>
                <div className="flex space-x-5">
                  <del className="font-bold text-3xl text-gray-900">
                    ₹{Math.floor(item.price[size] * 1.5)}
                  </del>
                  <h4 className="font-normal text-3xl text-red-700">
                    ₹{item.price[size]}
                  </h4>
                </div>
                <p className="font-normal text-base text-gray-900">
                  {item.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-bold text-xl text-slate-900">
                    Choose the size
                  </h4>
                  <div className="flex space-x-10">
                    <div className="space-y-2">
                      <p className="font-normal text-xs text-gray-900">Small</p>
                      <GiFullPizza
                        className={`text-2xl ${
                          size === 0 ? "text-red-500" : "text-gray-900"
                        } hover:text-red-500 duration-300`}
                        onClick={() => {
                          setSize(0);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-normal text-xs text-gray-900">
                        Medium
                      </p>
                      <GiFullPizza
                        className={`text-3xl ${
                          size === 1 ? "text-red-500" : "text-gray-900"
                        } hover:text-red-500 duration-300`}
                        onClick={() => {
                          setSize(1);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-normal text-xs text-gray-900">Large</p>
                      <GiFullPizza
                        className={`text-4xl ${
                          size === 2 ? "text-red-500" : "text-gray-900"
                        } hover:text-red-500 duration-300`}
                        onClick={() => {
                          setSize(2);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-xl text-slate-900">
                    Choose additional ingredients
                  </h4>
                  <div className="flex space-x-3">
                    <div className="space-x-1">
                      <input
                        type="checkbox"
                        id="double"
                        name="double"
                        value="HTML"
                      />
                      <label
                        htmlFor="double"
                        className="font-bold text-xs text-gray-900"
                      >
                        Double Ingredients
                      </label>
                    </div>
                    <div className="space-x-1">
                      <input
                        type="checkbox"
                        id="cheese"
                        name="cheese"
                        value="HTML"
                      />
                      <label
                        htmlFor="cheese"
                        className="font-bold text-xs text-gray-900"
                      >
                        Extra Cheese
                      </label>
                    </div>
                    <div className="space-x-1">
                      <input
                        type="checkbox"
                        id="spicy"
                        name="spicy"
                        value="HTML"
                      />
                      <label
                        htmlFor="spicy"
                        className="font-bold text-xs text-gray-900"
                      >
                        Spicy Sauce
                      </label>
                    </div>
                    <div className="space-x-1">
                      <input
                        type="checkbox"
                        id="garglic"
                        name="garglic"
                        value="HTML"
                      />
                      <label
                        htmlFor="garglic"
                        className="font-bold text-xs text-gray-900"
                      >
                        Garglic Sauce
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-5">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    className="border border-gray-900 w-10 rounded"
                    onChange={handleQuantity}
                  />
                  <button
                    className="font-normal text-xs text-white bg-sky-700 hover:bg-sky-900 duration-300 px-2 py-1 rounded"
                    onClick={() => {
                      handleCart(id, item, size, quantity);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
