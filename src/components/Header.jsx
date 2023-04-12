import { Link, NavLink } from "react-router-dom";
import loginIcon from "../images/avatar-icon.png";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to="/login" className="login-link">
          <img
            src={loginIcon}
            className="login-icon"
            alt="avatar icon for login link"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
