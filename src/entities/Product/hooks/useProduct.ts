import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../api/getProducts";

export const useProducts = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    
    return {
      loading,
      error,
      products: data?.products?.edges || []
    };
  };

