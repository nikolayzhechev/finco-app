import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../service/authService";

export const Register = () => {
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
    const confirmPassword = formData.get("repeat-psw");

    if (password !== confirmPassword) {
      const err = 'Passwords don\'t match.'
      setErrMsg(err);
      return;
    }
    setErrMsg(null);

    authService.register(email, password)
		  .then(() => {
      		navigate("/");
    	}).catch(err => {
        if(err.message.includes('invalid-email')){
          const err = 'Invalid email address.';
          setErrMsg(err);
        } else {
          const err = 'An error occurred, please try again.';
          setErrMsg(err);
        }
      });
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3">
            <div className="img-fluid text-center">
              <img src="./images/login-02.png" alt="" />
            </div>
          </div>
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Create an account.</h2>
            {
              errMsg && 
              <div>
                <strong>{errMsg}</strong>
              </div>
            }
            <div className="divider" />
            <form onSubmit={onSubmit}>
              <label htmlFor="email">
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
              <div className="py-2">
                <label htmlFor="repeat-psw">
                  <b>Repeat Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="repeat-psw"
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
          <h5 className="title-section">Already have an account?</h5>
          <div className="divider" />
          <div className="content">
            <p>
              <Link to={"/login"}>Click here</Link>
            </p>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </div>
  );
};
