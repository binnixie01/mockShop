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
  const [searchValue,setSearchValue]=useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const fuse = new Fuse<ProductCardType>(products, options);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = event.target;
    setSearchValue(value)

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
    <div ref={searchRef} className="w-80">
      <input className="h-8 rounded text-gray-950 px-4 hover:ring-2 hover:ring-blue-400"
        type="text"
        placeholder="Search by title"
        onChange={handleSearch}
      />
      {isSearchOpen &&
        <ul role="list" className="rounded absolute z-10 divide-y divide-slate-200 bg-slate-50">
          {searchResults.map((product) => (
          
          <li key={product.node.id} className="">
            <Link to={`/product/${encodeURIComponent(product.node.id)}`}>
            <div className="flex">
              <img
                src={product.node.featuredImage.url}
                alt={product.node.title}
                className="w-10 object-cover"
              />
              <div className="text-lg">{product.node.title}</div></div></Link>
            </li>
            
          ))}
        </ul>}
    </div>
  );
};

export default Search;
