import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ProductDetail from "../entities/Product/components/ProductDetail";
import ShoppingCart from "../features/ShoppingCart/components/ShoppingCart";
import Home from "./Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/cart",
      element: <ShoppingCart />,
    },
    
  ]);

const Router:React.FC=()=>{
    return(<RouterProvider router={router} />)
}

export default Router