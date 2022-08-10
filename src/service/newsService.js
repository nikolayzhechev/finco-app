import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

export const addNewsService = async (newsData) => {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      author: newsData.author,
      title: newsData.title,
      description: newsData.description,
      image: newsData.image,
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

export const getAllPosts = async () => {
  const newsQuery = await getDocs(collection(db, "news"));
  let newsData = [];

  newsQuery.forEach((doc) => {
    newsData.push(doc.data());
  });

  return newsData;
};

export const getOnePost = async (newsId) => {
  const newsQuery = await getDocs(collection(db, "news"));
  let newsData = [];

  newsQuery.forEach((doc) => {
    newsData.push(doc.data());
  });

  const currentItem = newsData.filter((item) => item.id === newsId);
  
  return currentItem[0];
};

export const updateOnePost = async (newsId, postData) => {
  const item = doc(db, "news", newsId);

  await updateDoc(item, {
    author: postData.author,
    title: postData.title,
    description: postData.description,
    image: postData.image
  });

  const updatedItem = doc(db, "news", newsId);
  const docSnap = await getDoc(updatedItem);

  return docSnap.data();
};

export const deleteOnePost = async (newsId) => {
  await deleteDoc(doc(db, "news", newsId));
};