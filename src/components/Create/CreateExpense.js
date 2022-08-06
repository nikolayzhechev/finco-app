import { Link, useNavigate } from "react-router-dom";
import { addExpenseService } from "../../service/expenseService";

export const CreateExpense = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const expenseData = Object.fromEntries(new FormData(e.target));

    addExpenseService(expenseData);

    navigate('/dashboard');
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Add New Expense</h2>
            <div className="divider" />
            <form onSubmit={onSubmit}>
              <label htmlFor="type">
                <b>Type</b>
              </label>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type of Expense"
                  name="type"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="paymentMethod">
                  <b>Payment method</b>
                </label>
                <input
                  type="text"
                  placeholder="Method of Direct Payment"
                  name="paymentMethod"
                  className="form-control"
                />
              </div>
              <div className="py-2">
                <label htmlFor="amount">
                  <b>Amount</b>
                </label>
                <input
                  type="text"
                  placeholder="Amount to be Payed"
                  name="amount"
                  className="form-control"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="period">
                  <b>Period</b>
                </label>
                <input
                  type="text"
                  placeholder="Period of Payments"
                  name="period"
                  className="form-control"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="image">
                  <b>Image</b>
                </label>
                <input
                  type="text"
                  placeholder="Add your Image"
                  name="image"
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
