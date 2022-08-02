import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 py-3">
              <div className="img-fluid text-center">
                <img src="./images/login-01.png" alt />
              </div>
            </div>
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Log in to your account.</h2>
            <div className="divider" />
            <form action="#">
              <label htmlFor="psw">
                <b>Email</b>
              </label>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="py-2">
                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-pill mt-4"
              >
                Continue
              </button>
            </form>
          </div>
          
        </div>
        <div className="col-lg-6 py-3">
          <h5 className="title-section">Not registered?</h5>
          <div className="divider" />
          <div className="content">
            <p>
              <Link to={"/register"}>
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </div>
  );
};