import { createBrowserRouter, RouterProvider } from 'react-router';
import React from 'react';
const ProductDetails = React.lazy(
   () => import('@/pages/product-info/ProductDetails'),
);
const MainPage = React.lazy(() => import('@/pages/home/MainPage'));
const MainLayout = React.lazy(() => import('@/layout/MainLayout'));
const CategoryProducts = React.lazy(
   () => import('@/pages/category-products/CategoryProducts'),
);
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const SearchResults = React.lazy(
   () => import('@/pages/search-result/SearchResult'),
);
// This is the main router file for the application
const router = createBrowserRouter([
   {
      Component: MainLayout,
      children: [
         {
            path: '/',
            Component: MainPage,
         },
         {
            path: '/product/:id',
            Component: ProductDetails,
         },
         {
            path: '/category/:id',
            Component: CategoryProducts,
         },
         {
            path: '/search/:query',
            Component: SearchResults,
         },
         {
            path: '*',
            Component: NotFound,
         },
      ],
   },
]);

export default function Router() {
   return <RouterProvider router={router} />;
}
