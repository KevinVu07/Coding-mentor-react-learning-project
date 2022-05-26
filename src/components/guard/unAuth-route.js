import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/use-auth";

const UnAuthRoute = () => {
  const auth = useAuth();
  if (auth) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default UnAuthRoute;
