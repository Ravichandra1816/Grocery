import React from "react";
import { useAppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../Components/ProductCard";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const serachCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filterProduct = products.filter(
    (product) => product.category.toLowerCase() === category
  );
  return (
    <div className="mt-16">
      {serachCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">
            {serachCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}
      {filterProduct.length > 0 ? (
        <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
          {filterProduct.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-2xl font-medium text-primary">
            No Products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
