import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";

const AllProduct = () => {
  const { products, searchQuery } = useAppContext(); //
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilterProduct(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilterProduct(products);
    }
  }, [products, searchQuery]);
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {filterProduct
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProduct;
