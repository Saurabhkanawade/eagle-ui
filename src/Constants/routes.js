import { Navigate } from "react-router-dom";
import Home from "./../Page/Home/index";
import Signin from "../Page/Signin/index";

const ROUTES = [
  {
    path: "/",
    key: "Root",
    exact: true,
    element: <Navigate replace to={"/login"} />,
  },
  {
    path: "/home",
    key: "Home",
    element: <Home />,
  },
  {
    path: "/login",
    key: "Login",
    element: <Signin />,
  },
  // {
  //   path: "/",
  //   key: "Login",
  //   element: <Login />,
  // },
  // {
  //   path: "/login",
  //   key: "Login",
  //   element: <Login />,
  // },
];

export default ROUTES;
