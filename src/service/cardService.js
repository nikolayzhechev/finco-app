import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, set, get } from "firebase/database";

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
}

// retreive entire cards collection