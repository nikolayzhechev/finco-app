import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExpenseContext } from "../../context/ExpenseContext";
import { deleteOneExpense, getAllExpenses } from "../../service/expenseService";

export const DeleteExpense = () => {
  const navigate = useNavigate();
  const { expenseId } = useParams();
  const { expenseDel } = useContext(ExpenseContext);

  useEffect(() => {
    deleteOneExpense(expenseId);
  });

  useEffect(() => {
    getAllExpenses()
    .then((result) => {
      expenseDel(result);
    })
    .then(navigate("/dashboard"));
  });

  return null;
};
