import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "./Mainlayout";
import Home from "./pages/Home";
import Signin from "./components/signin";
import Signup from "./components/Signup";
import Allbooks from "./pages/Allbooks";
import Addbooks from "./pages/Addbooks";
import Borowedbooks from "./pages/borowedbooks";
// import './index.css'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/allbooks',
          element: <Allbooks></Allbooks>,
          loader: () => fetch('http://localhost:5000/books')
        },
        {
          path: '/addbooks',
          element: <Addbooks></Addbooks>
        },
        {
          path: '/borowedbooks',
          element: <Borowedbooks></Borowedbooks>
        }


      ]
    },
  ]);

  export default router;