import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
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

    updateDoc(docRef, {
      id: docRef.id,
    });
    const item = await getDoc(docRef);

    return item.data();
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

export const updateOneCard = async (cardId, cardData) => {
  const item = doc(db, "cards", cardId);

  await updateDoc(item, {
    bank: cardData.bank,
    bankType: cardData.bankType,
    cardNumber: cardData.cardNumber,
    owner: cardData.owner,
    valid: cardData.valid,
    type: cardData.type,
    img: cardData.img,
  });

  const updatedItem = doc(db, "cards", cardId);
  const docSnap = await getDoc(updatedItem);

  return docSnap.data();
};

export const deleteOneCard = async (cardId) => {
  await deleteDoc(doc(db, "cards", cardId));
};
