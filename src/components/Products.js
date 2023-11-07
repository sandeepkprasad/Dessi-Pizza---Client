import React from "react";
import pizza1 from "../assests/barbeque-grill.png";
import pizza2 from "../assests/cheesy-tomato.png";
import pizza3 from "../assests/margarita.png";
import pizza4 from "../assests/margerita-capsicum.png";
import pizza5 from "../assests/newyork-style.png";
import pizza6 from "../assests/pepperoni.png";
import pizza7 from "../assests/salami-pepperoni.png";
import pizza8 from "../assests/tomato.png";
import PizzaItem from "../components/PizzaItem";

const products = [
  {
    id: "1",
    image: pizza1,
    title: "Barbeque Grill",
    price: "199",
    description:
      "Delicious variation of traditional pizza that's cooked on an outdoor barbecue grill. It combines the smoky flavors of grilled food with the classic elements of pizza.",
  },
  {
    id: "2",
    image: pizza2,
    title: "Cheesy Tomato",
    price: "89",
    description:
      "This delectable pizza is characterized by its simple yet satisfying combination of fresh tomato sauce and generous layers of gooey, melted cheese.",
  },
  {
    id: "3",
    image: pizza3,
    title: "Margherita",
    price: "99",
    description:
      "Margherita pizza celebrates the flavors of tomatoes, fresh mozzarella cheese, and basil, and it's a true culinary delight.",
  },
  {
    id: "4",
    image: pizza4,
    title: "Margherita Capsicum",
    price: "129",
    description:
      "The Margherita Capsicum pizza takes the beloved Margherita pizza to the next level by incorporating the vibrant and slightly sweet flavor of capsicum, also known as bell peppers.",
  },
  {
    id: "5",
    image: pizza5,
    title: "New York Style",
    price: "249",
    description:
      "New York-style pizza is a beloved and iconic pizza variety that has its roots in New York City and is renowned for its large, thin, foldable slices and a distinct combination of flavors and textures.",
  },
  {
    id: "6",
    image: pizza6,
    title: "Pepperoni",
    price: "249",
    description:
      "This delectable pizza variety features a harmonious blend of simple yet incredibly satisfying ingredients.",
  },
  {
    id: "7",
    image: pizza7,
    title: "Samali Pepperoni",
    price: "279",
    description:
      "Salami and pepperoni pizza is a delicious variation of the classic pepperoni pizza that combines the spicy and savory flavors of both salami and pepperoni.",
  },
  {
    id: "8",
    image: pizza8,
    title: "Tomato Cheese",
    price: "279",
    description:
      "A tomato cheese pizza is a classic and simple pizza that focuses on the fundamental elements of the dish, highlighting the wonderful interplay between ripe tomatoes and gooey cheese",
  },
];

const Products = () => {
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
            return <PizzaItem product={product} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Products;
