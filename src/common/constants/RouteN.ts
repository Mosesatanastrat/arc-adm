import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";

const RouteN = {
  HOME: "",
  LOG_IN: "/login",
  ADD_TEMPLATE: "add-template",
  PATIENT_LIST: "/patient-list",
};

export const RouteList = [
  { label: "Documentary", value: RouteN.HOME, Icon: ArticleIcon },
  { label: "Patient Checked In", value: RouteN.PATIENT_LIST, Icon: PeopleIcon },
];

export default RouteN;
