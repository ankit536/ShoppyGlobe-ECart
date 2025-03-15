import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useFetch from "../utils/useFetch";
import Loader from "./Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-xl">Error in loading Data</p>
      </div>
    );
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="w-full text-center mb-2 mt-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border shadow-md  shadow-gray-500 rounded px-3 py-2 w-1/2"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-4 p-2 items-center justify-center z-10">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
