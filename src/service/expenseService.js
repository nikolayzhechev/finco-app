import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDoc, getDocs, doc } from "firebase/firestore";

export const addExpenseService = async (expenseData) => {
  try {
    const docRef = await addDoc(collection(db, "expense"), {
      type: expenseData.type,
      paymentMethod: expenseData.paymentMethod,
      amount: expenseData.amount,
      period: expenseData.period,
      image: expenseData.image,
    });
    console.log(docRef.id);

  } catch (error) {
    console.error(error);
  }
};

export const getAllExpenses = async () => {
  const expenseQuery = await getDocs(collection(db, "expense"));
  let expenseData = [];

  expenseQuery.forEach((doc) => {
    expenseData.push(doc.data());
  });

  return expenseData;
};