import { getRoutePath } from "@utils/getRoutePath";
import { HEADER } from "./copy";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const path = getRoutePath(location.pathname);
  return HEADER[path];
}

export default Header;
