import React, { useContext } from "react";
import pizzaContext from "../context/pizzaContext";
import { Link } from "react-router-dom";
import PizzaItem from "../components/PizzaItem";

const Products = () => {
  const { products, isLoading } = useContext(pizzaContext);

  if (isLoading) {
    return (
      <div>
        <h3 className="font-bold text-sky-900 text-2xl">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="w-full py-10 space-y-20 px-32">
      <div className="w-full text-center space-y-5">
        <h4 className="font-bold text-gray-950 text-2xl">
          THE BEST PIZZA IN TOWN
        </h4>
        <p className="font-normal text-gray-950 text-xl">
          At Dessi Pizza, we take pride in crafting the most mouthwatering
          pizzas in town.
          <br />
          Each pizza is a masterpiece of flavor, made with the freshest
          ingredients and prepared with love.
        </p>
      </div>
      <div className="w-full grid grid-cols-4 gap-12">
        {products &&
          products.map((product, index) => {
            return (
              <Link to={`/product/${product.id}`} key={index}>
                <PizzaItem product={product} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
