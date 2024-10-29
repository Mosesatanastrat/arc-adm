import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteN from "../../common/constants/RouteN";
import Home from "../../routes/home";
import PrivateRoutes from "./private.routes";
import Login from "../../routes/login";
import PrivateLayout from "../layout/private.layout";
import AddTemplate from "../../routes/add-template";
import PatientChecked from "../../routes/patient-checked";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<PrivateLayout />}>
            <Route index path={RouteN.HOME} element={<PatientChecked />} />
            <Route path={RouteN.ADD_TEMPLATE} element={<AddTemplate />} />
            <Route path={RouteN.PATIENT_LIST} element={<PatientChecked />} />
          </Route>
        </Route>
        <Route path={RouteN.LOG_IN} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Routing;
