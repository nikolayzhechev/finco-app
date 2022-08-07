import { updateOneCard, getOneCard } from "../service/cardService";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditCard = ({ cards }) => {
    const navigate = useNavigate();
    const [currentCard, setCurrentCard] = useState({});
    const { cardId } = useParams();

    useEffect(() => {
      getOneCard(cardId)
          .then(result => {
              setCurrentCard(result);
          });
   }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const cardData = Object.fromEntries(new FormData(e.target));

        updateOneCard(cardId, cardData)

        navigate("/dashboard");
    }

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Edit Bank Card</h2>
            <div className="divider" />
            <form onSubmit={onSubmit}>
              <label htmlFor="bank">
                <b>Bank</b>
              </label>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bank Name"
                  name="bank"
                  defaultValue={currentCard.bank}
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bank Type"
                  name="bankType"
                  defaultValue={currentCard.bankType}
                />
              </div>

              <div className="py-2">
                <label htmlFor="cardNumber">
                  <b>Card Number</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Number"
                  name="cardNumber"
                  className="form-control"
                  required
                  defaultValue={currentCard.cardNumber}
                />
              </div>
              <div className="py-2">
                <label htmlFor="owner">
                  <b>Owner</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Owner"
                  name="owner"
                  className="form-control"
                  required
                  defaultValue={currentCard.owner}
                />
              </div>
              <div className="py-2">
                <label htmlFor="valid">
                  <b>Valid</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Valid Date"
                  name="valid"
                  className="form-control"
                  required
                  defaultValue={currentCard.valid}
                />
              </div>
              <div className="py-2">
                <label htmlFor="type">
                  <b>Type</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Type"
                  name="type"
                  className="form-control"
                  required
                  defaultValue={currentCard.type}
                />
              </div>
              <div className="py-2">
                <label htmlFor="img">
                  <b>Image</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Image"
                  name="img"
                  className="form-control"
                  required
                  defaultValue={currentCard.img}
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
