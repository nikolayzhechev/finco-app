import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-float">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            fin<span className="text-primary">co.</span>
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarContent">
            <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
              <li className="nav-item active">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/news"} className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Log in
                </Link>
              </li>
            </ul>
            <div className="ml-auto">
              <Link to={"/register"} className="btn btn-outline rounded-pill">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
