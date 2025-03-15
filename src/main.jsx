import { lazy, Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const NotFound = lazy(() => import("./components/NotFound"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center">Loading...</div>
            }
          >
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/productList",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center">Loading...</div>
            }
          >
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center">Loading...</div>
            }
          >
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center">Loading...</div>
            }
          >
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center">Loading...</div>
            }
          >
            <Checkout />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <NotFound />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer />
  </StrictMode>
);
