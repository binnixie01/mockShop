import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../api/getProducts";

export const useProducts = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    // console.log(data?.products?.edges);
    
    return {
      loading,
      error,
      products: data?.products?.edges || []
    };
  };