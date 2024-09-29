import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Sorting } from '../model/filterTypes';

interface FiltersState {
  sorting: Sorting;
  setSorting: (sorting: Sorting) => void;
}

export const useFiltersStore = create<FiltersState>()(
  persist(
    (set) => ({
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
