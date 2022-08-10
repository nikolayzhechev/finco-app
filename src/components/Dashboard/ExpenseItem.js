export const ExpenseItem = ({ expense }) => {
  return (
    <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
      <div className="d-flex flex-row">
        <div className="img-fluid mr-3">
          <img src={expense.image} alt="" />
        </div>
        <div>
          <h5>{expense.type}</h5>
          <p>
            {expense.period}
            <br></br>Avarage: <strong>{expense.amount}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
