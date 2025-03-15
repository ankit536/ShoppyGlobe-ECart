import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="text-right mt-4">
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded-r-full"
            >
              Proceed to Checkout <span className="text-lg">›</span>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center mt-4">
          <p className="text-xl font-semibold">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
