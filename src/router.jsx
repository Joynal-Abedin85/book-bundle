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
import UpdateBook from "./pages/UpdateBook";
import Categorybook from "./components/Categorybook";
import Detailsbook from "./pages/Detailsbook";
import Privateroute from "./components/Privateroute";
import Error from "./components/Error";
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
          element: (
            <Privateroute><Allbooks></Allbooks></Privateroute>
          ) ,
          loader: () => fetch('http://localhost:5000/books')
        },
        {
          path: '/addbooks',
          element: (
            <Privateroute><Addbooks></Addbooks></Privateroute>
          ) 
        },
        {
          path: '/borowedbooks',
          element: (
            <Privateroute><Borowedbooks></Borowedbooks></Privateroute>
          ) 
        },
        {
          path: '/updatebook/:id',
          element: (
            <Privateroute><UpdateBook></UpdateBook></Privateroute>
          ) ,
          loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path:'/books/:category',
          element: (
            <Privateroute><Categorybook></Categorybook></Privateroute>
          ), 
          loader:async({params})=>{
              const res =await fetch("http://localhost:5000/books")
              const data = await res.json()
              // console.log(data)
              const singledata = data.filter(d=>d.category == params.category)
              // console.log(singledata);
              return singledata

          }

      },
      {
        path: '/detailbook/:id',
        element: (
        <Privateroute><Detailsbook></Detailsbook></Privateroute>
      ),
        loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
      },


      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  export default router;