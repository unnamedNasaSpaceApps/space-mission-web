//import react
import * as React from "react";
import * as ReactDOM from "react-dom/client";

//react router
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//import components
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Demo } from "./components/Demo/Demo";
import { Footer } from "./components/Footer/Footer";

import ErrorPage from "./components/ErrorPage/ErrorPage";

const ComponentsWrapper = () =>{
  return(
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentsWrapper/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path:"/demo",
        element: <Demo/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);