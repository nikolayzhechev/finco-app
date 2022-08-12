import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as   authService from "../../service/authService";

export const Login = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("psw");

    authService.login(email, password)
		  .then((res) => { 
        if(res.user.email){
          navigate("/");
        }
    	})
      .catch(err => {
        setErrMsg(err);
        throw new Error('Invalid username or password.');
      });
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3">
            <div className="img-fluid text-center">
              <img src="./images/login-01.png" alt="" />
            </div>
          </div>
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Log in to your account.</h2>
            {
              errMsg && 
                <div>
                  <strong>Invalid username or password.</strong>
                </div>
            }
            <div className="divider" />
            <form onSubmit={onSubmit}>
              <label htmlFor="psw">
                <b>Email</b>
              </label>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
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
              <Link to={"/register"}>Click here</Link>
            </p>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </div>
  );
};
