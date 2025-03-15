import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <header className="w-full h-auto justify-center bg-gray-800 flex items-center border-b-2 px-4 py-4 ">
      <div className="me-4">
        <h1 className=" font-semibold text-lg text-yellow-500 sm:text-3xl ">
          Shoppy Globe
        </h1>
      </div>

      <nav className="flex gap-4">
        <Link
          className="bg-black text-white text-lg font-semibold rounded py-1 px-2"
          to="/"
        >
          Home
        </Link>

        <Link
          className="bg-black text-white text-lg font-semibold rounded relative py-1 px-2"
          to="/cart"
        >
          Cart
          <div className="absolute -top-3 left-9 bg-red-500 rounded-full w-fit px-2">
            {cartItems.length}
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
