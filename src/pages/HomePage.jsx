import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch(
      "https://dummyjson.com/products/?limit=10&skip=60&select=title,description,images,rating,price"
    );
    const data = await res.json();

    setProducts(data.products);
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px", color: "#7f2121" }}>Shop Now!</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {products && products.length ? (
          products.map((item) => <ProductCard key={item.id} product={item} />)
        ) : (
          <p>Loading Products...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
