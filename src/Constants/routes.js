import { Navigate } from "react-router-dom";
import Home from "./../Page/Home/index";
import Signin from "./../Page/auth/Signin/index";
import ResetPass from "./../Page/auth/Reset_Pass/index";
import Signup from "./../Page/auth/Signup/index";
import PageNotFound from './../Page/auth/404/index';

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
  {
    path: "*",
    key: "NotFound",
    element: <PageNotFound />,
  }
];

export default ROUTES;
