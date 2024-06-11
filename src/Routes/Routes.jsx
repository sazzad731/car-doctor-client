import { createBrowserRouter } from "react-router-dom";
import Index from "../Layout/Index";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import CartDetail from "../Pages/CartDetail/CartDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/service_detail/:id",
        element: <ServiceDetails />,
        loader: ({params})=> fetch(`https://car-doctor-server-alpha-murex.vercel.app/services/${params.id}`)
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut /></PrivateRoute>,
        loader: ({params})=> fetch(`https://car-doctor-server-alpha-murex.vercel.app/services/${params.id}`)
      },
      {
        path: "/cart-detail",
        element: <PrivateRoute><CartDetail/></PrivateRoute>
      }
    ],
  },
]);