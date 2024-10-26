import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// pages
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import About from "./routes/about";
import Contact from "./routes/contact";
import FamilyLaw from "./routes/family-law";
import Estate from "./routes/estate";
import Immigration from "./routes/immigration";
import Disclaimer from "./routes/disclaimer";
import Privacy from "./routes/privacy";
import Sitemap from "./routes/sitemap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "family-law",
    element: <FamilyLaw />,
    errorElement: <ErrorPage />,
  },
  {
    path: "estate",
    element: <Estate />,
    errorElement: <ErrorPage />,
  },
  {
    path: "immigration",
    element: <Immigration />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "disclaimer",
    element: <Disclaimer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sitemap",
    element: <Sitemap />,
    errorElement: <ErrorPage />,
  },
  {
    path: "privacy",
    element: <Privacy />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
