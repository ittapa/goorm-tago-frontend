import { GnB as GnBCopy } from "./copy";
import { useLocation } from "react-router-dom";
import { getRoutePath } from "@utils/getRoutePath";

function GnB() {
  const location = useLocation();
  const path = getRoutePath(location.pathname);
  return GnBCopy[path];
}

export default GnB;
