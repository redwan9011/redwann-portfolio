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
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
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
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/education",
        element: <Education></Education>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
