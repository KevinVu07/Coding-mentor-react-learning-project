import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/use-auth";

const AuthRoute = () => {
  const auth = useAuth();
  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthRoute;
