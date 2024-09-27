import React from "react";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../model/productTypes";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.node.id}`}>
        <div className="border rounded-lg p-4 shadow-md">
          <img
            src={product.node.featuredImage.url}
            alt={product.node.title}
            className="w-full object-cover"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.node.title}</h3>
          
          <div className="mt-4 flex justify-between">
          <p className="mt-1 text-gray-600">
            {product.node.variants.edges[0].node.price.currencyCode}{" "}
            {product.node.variants.edges[0].node.price.amount}
          </p>
            <button
              onClick={() => {}}
              className="mt-2 bg-black text-white py-1 px-3 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
