import { Link } from "react-router-dom";
import { Tables } from "./Tables";
import { CardItem } from "./CardItem";
import { ExpenseItem } from "./ExpenseItem";

export const Dashboard = ({cards, expense}) => {
  return (
    <main>
      <div className="page-section"></div>
      <div className="page-section">
        <div className="container">
          <div className="text-center">
            <div className="subhead">Nikolay's</div>
            <h2 className="title-section">
              Personal <span className="marked">Dashboard</span>
            </h2>
            <div className="divider mx-auto" />
          </div>

          <div className="row mt-5 text-center">
            <div className="col-lg-4 py-3">
              <Link to={"/addCard"} className="btn btn-primary">
                Add Card
              </Link>
            </div>
            <div className="col-lg-4 py-3">
              <Link to={"/addExpense"} className="btn btn-primary">
                Add Expense
              </Link>
            </div>
            <div className="col-lg-4 py-3">
              <Link to={"/profile"} className="btn btn-primary">
                Edit Account
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="page-section">
        <div className="container">
          <div className="text-center">
            <div className="subhead"></div>
            <h2 className="title-section">
              All <span className="marked">Cards</span>
            </h2>
            <div className="divider mx-auto" />
          </div>
        </div>{" "}
      </div>{" "}
      <div className="container wow fadeInUp">
        <div className="row">
          {cards.length > 0 ? (
            cards.map((x) => <CardItem key={cards.id} card={x} />)
          ) : (
              <div className="col-lg-4 py-3">
                <p>No cards have been added.</p>
                <Link to={"/addCard"} className="btn btn-outline border text-secondary">
                  Add Card
                </Link>
              </div>
          )}
          <div className="col-md-6 col-lg-4 py-3"></div>
          <div className="col-md-6 col-lg-4 py-3"></div>
          <div className="col-md-6 col-lg-4 py-3"></div>
          <div className="col-md-6 col-lg-4 py-3"></div>
          <div className="col-md-6 col-lg-4 py-3"></div>
          <div className="col-md-6 col-lg-4 py-3"></div>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <h2 className="title-section">
            All <span className="marked">Expenses</span>
          </h2>
          <div className="divider mx-auto" />
        </div>
        {/* <div className="row mt-5 text-center">
            <div className="col-lg-4 py-3">
            </div>
            <div className="col-lg-4 py-3">
            </div>
          </div> */}
      </div>{" "}
      <div className="page-section features">
        <div className="container">
          <h5 className="wow fadeInUp">Main Expenses</h5>
          <div className="row justify-content-center">
          {expense.length > 0 ? (
            expense.map((x) => <ExpenseItem expense={x} />)
          ) : (
              <div className="col-lg-4 py-3">
                <p>No expenses have been added.</p>
                <Link to={"/addCard"} className="btn btn-outline border text-secondary">
                  Add Expense
                </Link>
              </div>
          )}
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      <div className="page-section">
        <div className="container">
          <Tables />
        </div>
      </div>{" "}
    </main>
  );
};
