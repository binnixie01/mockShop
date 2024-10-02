import React from 'react';
import { useFiltersStore } from '../store/filterStore';
import { SortOption } from '../model/filterTypes';

const SortOptions: React.FC = () => {
  const { setSorting } = useFiltersStore();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting({ sortBy: e.target.value as SortOption });
  };

  return (
    <div className="flex rounded bg-white shadow h-6 justify-center gap-4 md:text-base text-xs items-center ">
      <h3 className="pl-2">Sort By</h3>
      <select
        onChange={handleSortChange}
        className="px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
