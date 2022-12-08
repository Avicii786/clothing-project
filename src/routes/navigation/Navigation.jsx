import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <nav>
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
