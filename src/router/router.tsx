import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
const  ProductDetails = React.lazy(() => import ("@/pages/product-info/ProductDetails"));
const MainPage = React.lazy(() => import("../pages/home/MainPage"));
const MainLayout = React.lazy(() => import("../layout/MainLayout"));
const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: MainPage,
      },
      {
        path: "/product/:id",
        Component: ProductDetails,
      }
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
