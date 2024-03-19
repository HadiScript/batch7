import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import { paths } from "./paths";

export const RedirectTo = () => {
  const [auth] = useAuth();

  return !auth.token ? (
    <Link to={paths.login} style={{ width: "300px" }}>
      Login
    </Link>
  ) : auth?.user?.role === "Author" ? (
    <Link to={paths.authorDashboard} style={{ width: "300px" }}>
      Author Dashbaord
    </Link>
  ) : auth?.user?.role === "Subscriber" ? (
    <Link to={"/"} style={{ width: "300px" }}>
      Subscriber Dashbaord
    </Link>
  ) : (
    <Link to={"/"} style={{ width: "300px" }}>
      Admin Dashboard
    </Link>
  );
};
