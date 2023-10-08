import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import AddItemPage from "./pages/AddItemPage.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import ItemPage from "./pages/ItemPage.tsx";
import Error from "./components/Error.tsx";
import SearchPage from "./pages/SearchPage.tsx";

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
        path: "/item/:itemId",
        element: <ItemPage />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
