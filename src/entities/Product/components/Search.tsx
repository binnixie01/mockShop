import React, { useState } from "react";
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
  const fuse = new Fuse<ProductCardType>(products, options);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = event.target;
    setSearchValue(value)

    if (value.length === 0) {
      return;
    }

    const results = fuse.search(value);
    const items = results.map((result) => result.item);

    setSearchResults(items);
    
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleSearch}
      />
      {searchValue &&
        <ul className="border rounded p-4 space-y-2">
          {searchResults.map((product) => (
          <Link to={`/product/${encodeURIComponent(product.node.id)}`}>
          <li key={product.node.id} className="border-b p-2">
              <img
                src={product.node.featuredImage.url}
                alt={product.node.title}
                className="w-full object-cover"
              />
              <div className="text-lg font-semibold">{product.node.title}</div>
            </li></Link>
            
          ))}
        </ul>}
    </div>
  );
};

export default Search;
