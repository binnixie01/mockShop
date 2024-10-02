import React, { useEffect, useRef, useState } from "react";
import { useProducts } from "../hooks/useProduct";
import Fuse from "fuse.js";
import { ProductCardType } from "../model/productTypes";
import { Link } from "react-router-dom";

const Search = () => {
  const { products } = useProducts();
  const options = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.2,
    keys: ["node.title"],
  };
  const [searchResults, setSearchResults] = useState<ProductCardType[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const fuse = new Fuse<ProductCardType>(products, options);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = event.target;

    if (value) {
      setIsSearchOpen(true);
    }else{
      setIsSearchOpen(false)
    }

    const results = fuse.search(value);
    const items = results.map((result) => result.item);

    setSearchResults(items);
    
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div ref={searchRef} role="searchbox" aria-label="Search products by title" className="md:w-80 w-40">
      <input className="md:h-8 h-6 rounded text-gray-950 px-4 hover:ring-2 hover:ring-blue-400 w-full"
        type="text"
        placeholder="Search by title"
        onChange={handleSearch}
      />
      {isSearchOpen &&
        <ul role="list" className="rounded absolute z-10 divide-y divide-slate-200 bg-slate-50 flex flex-col justify-center">
          {searchResults.map((product) => (
          
          <li key={product.node.id} className="hover:bg-slate-200">
            <Link to={`/product/${encodeURIComponent(product.node.id)}`}>
            <div className="flex">
              <img
                src={product.node.featuredImage.url}
                alt={product.node.title}
                className="w-10 object-cover"
              />
              <div className="text-xs">{product.node.title}</div></div></Link>
            </li>
            
          ))}
        </ul>}
    </div>
  );
};

export default Search;
