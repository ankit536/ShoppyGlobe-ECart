import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // Clear the cart (optional: requires dispatching an action)
    // dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="mb-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b pb-2 mb-2"
              >
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
          <div className="text-right text-lg font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <form className="mt-4">
            <div className="mb-2">
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold">Address</label>
              <textarea
                placeholder="Your Address"
                className="border p-2 w-full"
              />
            </div>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Place Order
            </button>
          </form>
        </>
      ) : (
        <p>Your cart is empty. Add items to proceed to checkout.</p>
      )}
    </div>
  );
};

export default Checkout;
