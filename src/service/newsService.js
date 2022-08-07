import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  docs,
  updateDoc,
  query,
  where,
  get,
} from "firebase/firestore";

export const addNewsService = async (newsData) => {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      author: newsData.author,
      title: newsData.title,
      description: newsData.description,
      image: newsData.image,
    });
    console.log(docRef.id);

    updateDoc(docRef, {
      id: docRef.id,
    });
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
};