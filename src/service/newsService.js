import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDoc, getDocs, doc } from "firebase/firestore";

export const addNewsService = async (newsData) => {
    try {
      const docRef = await addDoc(collection(db, "news"), {
        author: newsData.author,
        title: newsData.title,
        description: newsData.description,
        image: newsData.image,
      });
      console.log(docRef.id);
  
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