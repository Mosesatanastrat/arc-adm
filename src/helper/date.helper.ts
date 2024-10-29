import moment from "moment";

export const getYear = () => {
  return moment().format("YYYY");
};
