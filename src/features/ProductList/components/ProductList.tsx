import React, { useEffect, useState } from "react";
import { useProducts } from "../../../entities/Product/hooks/useProduct";
import ProductCard from "../../../entities/Product/components/ProductCard";
import { ProductCardType } from "../../../entities/Product/model/productTypes";
import SortOptions from "../../../entities/Product/components/SortOptions";
import Filter from "../../../entities/Product/components/Filter";
import { motion } from "framer-motion";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const ITEMS_PER_PAGE = 12;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(products.length / ITEMS_PER_PAGE));
  useEffect(() => {
    setTotalPages(Math.ceil(products.length / ITEMS_PER_PAGE));
  }, [products]);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  if (loading) return <div>...loading</div>;
  if (error) return `Error! ${error}`;
  return (
    <div >
      <div className="flex flex-col items-end pr-10">
        <div className="flex gap-4">
          <SortOptions />
          <button className="bg-black text-slate-50 rounded px-2 hover:bg-gray-700" onClick={() => setIsFilter((prevState) => !prevState)}>
            Filter
          </button>
        </div>
        {isFilter && <Filter />}
      </div>
      <div className="flex justify-center">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.5 } },
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 gap-4 m-8 w-10/12"
      >
        {currentItems.map((product: ProductCardType) => {
          return <ProductCard key={product.node.id} product={product} />;
        })}
      </motion.div></div>
      <div className="flex justify-center m-4 gap-4 items-center">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="rounded-full p-1 bg-white">
          <ArrowBackIosNewIcon fontSize="medium"/>
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className=" bg-white rounded-full">
          <NavigateNextIcon fontSize="large"/>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
