import { Outlet, Navigate } from "react-router-dom";
import RouteN from "../../common/constants/RouteN";

const PrivateRoutes = () => {
  const branchData = localStorage.getItem("branchData");
  let loggedIn =
    branchData != undefined && branchData !== "" && branchData != null;
  const auth = { token: loggedIn };
  return auth.token ? <Outlet /> : <Navigate to={RouteN.LOG_IN} />;
};

export default PrivateRoutes;
