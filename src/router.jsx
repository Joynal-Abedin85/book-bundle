import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "./Mainlayout";
import Home from "./pages/Home";
// import './index.css'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;