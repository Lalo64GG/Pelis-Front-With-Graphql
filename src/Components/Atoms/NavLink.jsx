import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm, faTv, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const NavLink = ({ to, children }) => {
  const location = useLocation();

  let icon = null;

  if (to === "/") {
    icon = faSignOutAlt;
  } else if (to === "/home/peliculas") {
    icon = faFilm;
  } else if (to === "/home/series") {
    icon = faTv;
  } else if(to === "/home"){
    icon = faHome;
  }

  return (
    <div className="flex justify-between items-center">
      <Link
        to={to}
        className={`${
          location.pathname === to
            ? "text-white font-bold border-b-2 border-white"
            : "text-black font-bold"
        }  px-4 py-6 flex items-center`}
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {children}
      </Link>
    </div>
  );
};