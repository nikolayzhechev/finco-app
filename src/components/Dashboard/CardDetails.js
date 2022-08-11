import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import * as cardService from "../../service/cardService";
import { CardContext } from "../../context/CardContext";

export const CardDetails = () => {
  const [currentCard, setCurrentCard] = useState({});
  const [expenseItem, setExpenseItem] = useState([]);
  const { cardId } = useParams();
  const { addLinkedExpense, cards } = useContext(CardContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    cardService.getOneCard(cardId).then((result) => {
      setCurrentCard(result);
    });
  }, []);

  useEffect(() =>{
    addLinkedExpense(cardId);
  }, []);

  useEffect(() => {
    const item = cards.find(x => x.id === cardId);
    setExpenseItem(item.linkedExpenses);
  }, []);

  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 wow fadeInLeft">
            <h2 className="title-section">{currentCard.bank}</h2>
            <h5>{currentCard.bankType}</h5>
            <div className="divider" />
            <p className="mb-5">
              Type: <strong>{currentCard.type}</strong> <br></br>
              Card Number: <strong>{currentCard.cardNumber}</strong> <br></br>
              Valid Thru: <strong>{currentCard.valid}</strong> <br></br>
              Expenses:&nbsp;
                  { expenseItem.length > 0 ?
                     expenseItem.map((item) => (  
                      <span><br></br><strong>{item.type}</strong>:&nbsp;{item.amount}</span>
                     ))
                     :
                     <span>No expenses linked</span>
                  }
            </p>
            <Link
              to={`/card/${currentCard.id}/edit`}
              className="btn btn-primary"
            >
              Edit
            </Link>
            <button className="btn btn-outline ml-2">
              <Link to={`/cardDelete/${cardId}`}>Delete</Link>
            </button>
          </div>
          <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place text-center">
              <img src={currentCard.img} alt="" />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
