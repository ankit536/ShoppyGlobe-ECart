import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const inCart = cartItems.some((item) => item.id === product.id);
  return (
    <div>
      <div className="w-full max-w-xs flex flex-col bg-gray-100 rounded-md mt-2 p-1 shadow-gray-400 shadow-lg">
        <div className="p-2">
          <img
            src={product.images[0]}
            className=" object-contain h-48 w-96"
            alt={product.title}
          />
        </div>

        <div className="bg-gray-300 rounded p-2">
          <h2 className="text-xl font-normal mb-1">{product.title}</h2>
          <p className="text-2xl font-semibold mb-1">${product.price}</p>
          <div className="flex justify-between">
            <button
              disabled={inCart}
              className="bg-blue-600 px-2 py-2 rounded text-white mt-2 hover:ring ring-white ring-offset-1 transition duration-300 ease-in-out"
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(`${product.title} added to cart!`);
              }}
            >
              {inCart ? "In Cart" : "Add to Cart"}
            </button>
            <Link
              to={`/product/${product.id}`}
              className="bg-yellow-500 px-2 py-2 rounded text-white mt-2 hover:ring ring-white ring-offset-1 transition duration-300 ease-in-out"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
