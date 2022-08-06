import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Edit Account</h2>
            <div className="divider" />
            <form action="#">
              <label htmlFor="bank">
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
                <label htmlFor="number">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="number"
                  className="form-control"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="valid">
                  <b>Image</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="valid"
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-pill mt-4"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </div>
  );
};
