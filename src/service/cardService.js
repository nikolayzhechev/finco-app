import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDoc, getDocs, doc } from "firebase/firestore";

export const addCardService = async (cardData) => {
  try {
    const docRef = await addDoc(collection(db, "cards"), {
      bank: cardData.bank,
      bankType: cardData.bankType,
      cardNumber: cardData.cardNumber,
      owner: cardData.owner,
      valid: cardData.valid,
      type: cardData.type,
      img: cardData.img,
    });
    console.log(docRef.id);

  } catch (error) {
    console.error(error);
  }
};

export const getAllCards = async () => {
  const cardsQuery = await getDocs(collection(db, "cards"));
  let cardData = [];

  cardsQuery.forEach((doc) => {
    cardData.push(doc.data());
  });

  return cardData;
};