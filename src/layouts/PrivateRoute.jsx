import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { loading, auth } = useAuth();

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return <>{auth._id ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default PrivateRoute;
