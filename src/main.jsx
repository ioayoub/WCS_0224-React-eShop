import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Homepage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
        loader: ({ params }) =>
          fetch(`https://ioayoub.fr/api/eshop/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
