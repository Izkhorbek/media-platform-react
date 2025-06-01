import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
