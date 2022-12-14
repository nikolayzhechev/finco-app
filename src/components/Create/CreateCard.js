import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../context/CardContext";
import { addCardService } from "../../service/cardService";

export const CreateCard = () => {
  const { cardAdd } = useContext(CardContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const cardData = Object.fromEntries(new FormData(e.target));

    addCardService(cardData)
        .then(result => {
          cardAdd(result);
        }).catch(err => {
          console.log(err);
        });
    
    navigate("/dashboard");
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Add New Card</h2>
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
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bank Type"
                  name="bankType"
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
