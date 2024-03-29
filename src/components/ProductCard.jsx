import React from "react";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

 
  function addtoCart() {
    dispatch(addItem(product));
  }

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        width={200}
        height={200}
        alt={product.title}
      />

      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Rating:{product.rating}/5</p>
        <p>Price:₹{product.price * 100}</p>
        <button onClick={addtoCart}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
