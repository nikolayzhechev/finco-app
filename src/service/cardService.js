import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

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

    updateDoc(docRef, {
      id: docRef.id,
    });
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

export const getOneCard = async (cardId) => {
  const cardQuery = await getDocs(collection(db, "cards"));
  let cardsData = [];

  cardQuery.forEach((doc) => {
    cardsData.push(doc.data());
  });

  const currentItem = cardsData.filter((item) => item.id === cardId);

  return currentItem[0];
};
