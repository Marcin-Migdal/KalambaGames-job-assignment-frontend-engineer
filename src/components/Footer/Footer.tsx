import { Link } from "react-router-dom";
import { UrlPaths } from "utils";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to={UrlPaths.HOME} className="logo-font">
          conduit
        </Link>
        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
  );
};
