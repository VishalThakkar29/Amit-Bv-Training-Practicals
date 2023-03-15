
// import react from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:ids', element: <ProductDetails /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
