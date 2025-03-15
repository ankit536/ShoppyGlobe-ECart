import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex p-2 ">
      <div className="w-full max-w-lg flex-col rounded p-1 border-2 shadow-gray-500 shadow-lg ">
        <div className="p-2">
          <img
            src={item.images[0]}
            className=" object-contain max-h-60 w-96"
            alt={item.title}
          />
        </div>
        <div className="bg-gray-200 rounded p-2">
          <h1 className="text-xl font-semibold mb-1">{item.title}</h1>
          <p className="text-lg font-semibold bg-blue-600 w-fit px-2 py-0 rounded text-white">
            ${item.price}
          </p>
          <p className="text-md mt-1">Quantity: {item.quantity}</p>
          <button
            className="bg-red-600 text-white text-sm rounded px-2 py-1 mt-1"
            onClick={() => {
              dispatch(removeFromCart(item.id));
              toast.warning(`${item.title} remove from cart!`);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
