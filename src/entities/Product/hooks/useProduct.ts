import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../api/getProducts";
import { useFiltersStore } from "../store/filterStore";

export const useProducts = () => {
  const { sorting,filters} = useFiltersStore();
  let query=""
  let sortby
  let rev= false
  if(filters.priceRange.max){
    query=`variants.price:>${filters.priceRange.min} variants.price:<${filters.priceRange.max}`
  }
  switch (sorting.sortBy) {
    case 'PRICE_ASC':
      sortby='PRICE';
      break;
    case 'PRICE_DESC':
      sortby='PRICE';
      rev=true;
    break;
    case 'TITLE_ASC':
      sortby='TITLE';
    break;
    case 'TITLE_DESC':
      sortby='TITLE';
      rev=true;
      break;
    default:
    sortby='TITLE'
  }
  
    const { loading, error, data } = useQuery(GET_PRODUCTS, { variables: { query:query,sortBy:sortby,reverse:rev }, });
    
    return {
      loading,
      error,
      products: data?.products?.edges || []
    };
  };

