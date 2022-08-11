import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardContext } from "../../context/CardContext";
import { deleteOneCard, getAllCards } from "../../service/cardService";

export const DeleteCard = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { cardDel } = useContext(CardContext);

  useEffect(() => {
    deleteOneCard(cardId);
    getAllCards()
      .then((result) => {
        cardDel(result);
      })
      .then(navigate("/dashboard"));
  });

  return null;
};
