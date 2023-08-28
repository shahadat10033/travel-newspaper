import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./Routes/Root";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Routes/Home';
import ErrorPage from './Routes/ErrorPage';
import SingleNewsDetails from './Components/SingleNewsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/details/:id",
        element:<SingleNewsDetails></SingleNewsDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
