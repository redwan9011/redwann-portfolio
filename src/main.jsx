import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOuts from './LayOuts/LayOuts';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOuts></LayOuts> ,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
