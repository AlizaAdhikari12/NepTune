import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DisplayPage } from "./Component/DiplayPage/DisplayPage.jsx";
import { HomePage } from "./Component/HomePage/HomePage.jsx";
import { Layout } from "./Component/Layout/Layout.jsx";
import { Downloaded } from "./Component/Dowloaded/Downloaded.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: "",
    element: <DisplayPage />,
  },
  {
    path: "/App",
    element: <App />,
    children: [
      {
        path:"Layout",
        element:<Layout/>
      },
      {
path:"HomePage",
element:<HomePage/>
      },
      {
        path:'Downloaded',
        element:<Downloaded/>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router ={router}/>
  </React.StrictMode>
);
