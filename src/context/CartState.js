import { useReducer } from "react";
import cartContext from "./cartContext";
import reducer from "../reducer/cartReducer";

const initialState = {
  cart: [],
};

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCart = (id, item, size, quantity) => {
    dispatch({ type: "SET_CART", payload: "" });
  };

  return (
    <cartContext.Provider value={{ ...state, handleCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartState;
