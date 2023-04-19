import { Link, NavLink } from "react-router-dom";
import { BsFillDoorOpenFill } from "react-icons/bs";
import loginIcon from "../assets/images/avatar-icon.png";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const fakeLogOut = () => {
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={loginIcon} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>
          <BsFillDoorOpenFill />
        </button>
      </nav>
    </header>
  );
};

export default Header;
