import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../api/getProducts";

export const useProductbyId=(id:string)=>{

    const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, { variables: { id }, });
      console.log(data)

      return {
        loading,
        error,
        product: data?.product
      };
  }