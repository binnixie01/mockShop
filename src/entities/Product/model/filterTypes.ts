export type SortOption = 'PRICE_ASC' | 'PRICE_DESC'| 'TITLE_DESC'|'TITLE_ASC';
  
  
export interface Sorting {
    sortBy: SortOption;
  }
    
  export interface PriceRange {
    min: number|null;
    max: number|null;
  }export interface Filters {
    priceRange: PriceRange;
  }