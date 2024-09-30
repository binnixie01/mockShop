import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Filters, PriceRange, Sorting } from '../model/filterTypes';

interface FiltersState {
  filters:Filters
  setPriceRange:(PriceRange:PriceRange)=>void
  sorting: Sorting;

  setSorting: (sorting: Sorting) => void;
}

export const useFiltersStore = create<FiltersState>()(
  persist(
    (set) => ({
      filters: {
        priceRange: {
          min: null,
          max: null,
        },
      },
      setPriceRange: (priceRange) =>
        set((state) => ({
          filters: {
            ...state.filters,
            priceRange,
          },
        })),
      sorting: {
        sortBy: 'TITLE_ASC',
      },
      setSorting: (sorting) =>
        set(() => ({
          sorting,
        })),
    }),
    {
      name: 'filters-storage'
    }
  )
);
