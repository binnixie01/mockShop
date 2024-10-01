import React from "react";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../model/productTypes";
import { motion } from 'framer-motion';


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div variants={{hidden:{opacity:0}, show:{opacity:1}}} whileHover={{scale:1.1,backgroundColor:'#64748b', color:'black'}} className="rounded-xl" >
      <Link to={`/product/${encodeURIComponent(product.node.id)}`}>
        <div className=" p-4 shadow-md">
          <img
            src={product.node.featuredImage.url}
            alt={product.node.title}
            className="w-full object-cover rounded-lg"
          />
          <h3 className="mt-2 text-lg ">{product.node.title}</h3>

          <div className="mt-4 flex justify-between">
            <p className="mt-1 text-gray-600">
              {product.node.variants.edges[0].node.price.currencyCode}{" "}
              {product.node.variants.edges[0].node.price.amount}
            </p>
            
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
