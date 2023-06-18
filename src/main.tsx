import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./sass/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Review from "./components/Review.tsx";
import ErrorPage from "./error.page.tsx";
import ExpandableImage from "./components/ExpandableImage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/reviews",
        element: <Review />,
      },
      {
        path: "/expandable-image",
        element: <ExpandableImage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
