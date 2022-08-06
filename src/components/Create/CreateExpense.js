import { Link } from "react-router-dom";

export const CreateExpense = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Add New Expense</h2>
            <div className="divider" />
            <form action="#">
              <label htmlFor="bank">
                <b>Type</b>
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
                  <b>Payment method</b>
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
                <label htmlFor="owner">
                  <b>Amount</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="owner"
                  className="form-control"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="valid">
                  <b>Period</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="valid"
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
                Add
              </button>
            </form>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </div>
  );
};
