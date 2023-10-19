import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import AddItemPage from "./pages/AddItemPage.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import ItemPage from "./pages/ItemPage.tsx";
import Error from "./components/Error.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ItemCheckout from "./pages/ItemCheckout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/addItem",
        element: <AddItemPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout/:itemId",
        element: <ItemCheckout />,
      },
      {
        path: "/item/:itemId",
        element: <ItemPage />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/search",
    element: <SearchPage />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
