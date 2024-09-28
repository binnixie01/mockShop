import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ProductList from "../features/ProductList/components/ProductList";
import ProductDetail from "../entities/Product/components/ProductDetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    
  ]);

const Router:React.FC=()=>{
    return(<RouterProvider router={router} />)
}

export default Router