import { Navigate } from "react-router-dom";
import Home from "./../Page/Home/index";
import Signin from "../Page/Signin/index";
import ResetPass from "../Page/Reset_Pass";
import Signup from "./../Page/Signup/index";

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
  {
    path: "/forgot-password",
    key: "ForgotPassword",
    element: <ResetPass />,
  },
  {
    path: "/signup",
    key: "Register",
    element: <Signup />,
  },
];

export default ROUTES;
