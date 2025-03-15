import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Loader from "./Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { data, error, loading } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

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

  if (!product)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-xl">No Product Found</p>
      </div>
    );
  return (
    <div className="w-full flex justify-center items-center p-2 ">
      <div className="w-full max-w-2xl flex-col rounded p-1 border-2 shadow-gray-500 shadow-lg ">
        <div className="p-2">
          <img
            src={product.images[0]}
            className=" object-contain max-h-60 w-96"
            alt=""
          />
        </div>
        <div className="bg-gray-200 rounded p-2">
          <h1 className="text-2xl font-semibold mb-1">{product.title}</h1>
          <p className="text-md font-extralight mb-2">{product.description}</p>
          <p className="text-2xl font-semibold bg-blue-600 w-fit px-2 py-0 rounded text-white">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
