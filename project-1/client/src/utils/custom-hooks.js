import { Grid } from "antd";
import { useLocation } from "react-router-dom";

export const usePoints = () => {
  const points = Grid.useBreakpoint();
  return points;
};

export const Active = (path) => {
  return path === useLocation().pathname ? true : false;
};
