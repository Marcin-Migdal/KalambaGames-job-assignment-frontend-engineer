import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import { useAuth } from "context/AuthContext/AuthContext";
import { UrlPaths } from "utils";

export const Header = () => {
  const { pathname } = useLocation();
  const { signOut, user } = useAuth();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href={UrlPaths.HOME}>
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className={classNames("nav-link", { active: UrlPaths.HOME === pathname })} to={UrlPaths.HOME}>
              Home
            </Link>
          </li>

          {!user ? (
            <li className="nav-item">
              <Link className={classNames("nav-link", { active: UrlPaths.SIGN_IN === pathname })} to={UrlPaths.SIGN_IN}>
                Sign in
              </Link>
            </li>
          ) : (
            <li className="nav-item" onClick={signOut}>
              <a className="nav-link">Sing out</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
