import { useLocation } from "react-router-dom";

export const Active = (path) => {
  return path === useLocation().pathname ? true : false;
};
