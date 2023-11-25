import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Banner from "./Componends/Banner/Banner";
import About from "./Componends/About/About";
import Portfolio from "./Componends/Portfolio/Portfolio";
import Services from "./Componends/Services/Services";
import Home from "./Componends/Home/Home";
import Contact from "./Componends/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
