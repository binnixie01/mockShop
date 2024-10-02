import React, { useState, useEffect } from "react";
import { useFiltersStore } from "../store/filterStore";

const Filter: React.FC = () => {
  const { filters, setPriceRange } = useFiltersStore();
  const [min, setMin] = useState(filters.priceRange.min);
  const [max, setMax] = useState(filters.priceRange.max);
  useEffect(() => {
    setMin(filters.priceRange.min);
    setMax(filters.priceRange.max);
  }, [filters.priceRange.min, filters.priceRange.max]);

  const handleApply = () => {
    if (min! > max!) {
      alert("Minimum price cannot be greater than maximum price.");
      return;
    }
    setPriceRange({ min, max });
  };

  const handleReset = () => {
    setMin(0);
    setMax(1000);
    setPriceRange({ min: 0, max: 1000 });
  };

  return (
    <div className=" md:text-base text-xs ">
      <h3 className="">Price Range</h3>
      <div className="flex flex-col">
        <div className="flex items-center">
          <label htmlFor="min-price" className="w-10">
            Min:
          </label>
          <input
            id="min-price"
            type="number"
            value={min!}
            onChange={(e) => setMin(Number(e.target.value))}
            className="rounded-md w-28 px-2"
            placeholder="0"
            min={0}
            aria-labelledby="min-price-label"
            aria-describedby="min-price-help"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="max-price" className="w-10">
            Max:
          </label>
          <input
            id="max-price"
            type="number"
            value={max!}
            onChange={(e) => setMax(Number(e.target.value))}
            className="rounded-md w-28 px-2"
            placeholder="1000"
            min={0}
          />
        </div>
      </div>
      <div className=" flex justify-between mt-2">
        <button
          onClick={handleApply}
          className="bg-blue-500 text-white rounded px-2 hover:bg-blue-600"
          aria-label="Apply Price Filter"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-whiterounded px-2 hover:bg-gray-600 text-white rounded"
          aria-label="Reset Price Filter" 
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
