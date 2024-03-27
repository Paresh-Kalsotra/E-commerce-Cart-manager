import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItemCard from "../components/CartItemCard";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(0);

  //calculating total price
  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <div style={{ border: "1px solid #7f2121", margin: "4% 8%" }}>
      <h3
        style={{
          background: "#7f2121",
          color: "#f0f0f0",
          textAlign: "center",
          padding: "10px",
        }}
      >
        Your Cart
      </h3>
      <div className="order-List">
        {cartItems && cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <CartItemCard key={item.id} product={item} />
            ))}
            <h3 className="total-cost">Total = ₹{total}</h3>
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "100px",
            }}
          >
            <p>Your cart is empty.</p>
            <p>Explore our products and start shopping!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
