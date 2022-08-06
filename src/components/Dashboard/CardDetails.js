import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as cardService from "../../service/cardService";

export const CardDetails = () => {
    const [currentCard, setCurrentCard] = useState({});

    const { cardId } = useParams();

  useEffect(() => {
        cardService.getOneCard(cardId)
            .then(result => {
                setCurrentCard(result);
            });
     });

  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 wow fadeInLeft">
            <h2 className="title-section">
              {currentCard.bank}
            </h2>
            <h5>{currentCard.bankType}</h5>
            <div className="divider" />
            <p className="mb-5">
            Type: {currentCard.type} <br></br>
            Card Number: {currentCard.cardNumber} <br></br>
            Valid Thru: {currentCard.valid} <br></br>
            Covers main expenses.
            </p>
            <a href="/" className="btn btn-primary">
              Edit
            </a>
            <a href="/" className="btn btn-outline ml-2">
              Delete
            </a>
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
