import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ProductList from "../features/ProductList/components/ProductList";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    
  ]);

const Router:React.FC=()=>{
    return(<RouterProvider router={router} />)
}

export default Router