import React,{ useState, useEffect } from 'react'
import { useFiltersStore } from '../store/filterStore';

const Filter:React.FC = () => {
    const { filters, setPriceRange } = useFiltersStore();
    const [min, setMin] = useState(filters.priceRange.min);
    const [max, setMax] = useState(filters.priceRange.max);
    useEffect(() => {
        setMin(filters.priceRange.min);
        setMax(filters.priceRange.max);
      }, [filters.priceRange.min, filters.priceRange.max]);

      const handleApply = () => {

        if (min! > max!) {
          alert('Minimum price cannot be greater than maximum price.');
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
    <div className="p-4 border rounded mb-4 bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">Price Range</h3>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label htmlFor="min-price" className="w-16">Min:</label>
          <input
            id="min-price"
            type="number"
            value={min!}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
            min={0}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="max-price" className="w-16">Max:</label>
          <input
            id="max-price"
            type="number"
            value={max!}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1000"
            min={0}
          />
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleApply}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Filter
 


 