import React from 'react';
import { useFiltersStore } from '../store/filterStore';
import { SortOption } from '../model/filterTypes';

const SortOptions: React.FC = () => {
  const { setSorting } = useFiltersStore();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting({ sortBy: e.target.value as SortOption });
  };

  return (
    <div className="p-4 border rounded mb-4 bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">Sort By</h3>
      <select
        onChange={handleSortChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="PRICE_ASC">Price: Low to High</option>
        <option value="PRICE_DSC">Price: High to Low</option>
        <option value="TITLE_ASC">Title: A to Z</option>
        <option value="TITLE_DESC">Title: Z to A</option>
      </select>
    </div>
  );
};

export default SortOptions;
