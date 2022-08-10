import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { News } from "./components/News/News";
import { Login } from "./components/Users/Login";
import { Register } from "./components/Users/Register";
import { Logout } from "./components/Users/Logout";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Users/Profile";

import { CreateCard } from "./components/Create/CreateCard";
import { CreateExpense } from "./components/Create/CreateExpense";
import { CreateNewsPost } from "./components/Create/CreateNewsPost";
import { NewsDetails } from "./components/News/NewsDetails";
import { CardDetails } from "./components/Dashboard/CardDetails";
import { EditCard } from "./components/EditCard";
import { EditPost } from "./components/News/EditPost";
import { DeletePost } from "./components/News/DeletePost";
import { DeleteCard } from "./components/Dashboard/DeleteCard";

import * as cardService from "./service/cardService";
import * as expenseService from "./service/expenseService";
import * as newsService from "./service/newsService";
import { CardContext } from "./context/CardContext";
import { NewsPostContext } from "./context/NewsPostContext";

function App() {
  const [cards, setCards] = useState([]);
  const [expense, setExpense] = useState([]);
  const [post, setPost] = useState([]);

  const cardAdd = (cardData) => {
    setCards(state => [
      ...state,
      cardData,
      ]);
  };

  const cardEdit = (cardId, cardData) => {
    setCards(state => state.map(x => x.id === cardId ? cardData : x))
  };

  const cardDel = (remainingData) => {
    console.log(remainingData);
    setCards(remainingData);
  };

  const newsAdd = (newsData) => {
    setPost(state => [
      ...state,
      newsData
    ]);
  };

  const newsDel = (remainingData) => {
    setPost(remainingData);
  };

  const newsEdit = (newsId, newsData) => {
    setPost(state => state.map(x => x.id === newsId ? newsData : x))
  }

  useEffect(() => {
    cardService.getAllCards().then((result) => {
      setCards(result);
    });
  }, []);

  useEffect(() => {
    expenseService.getAllExpenses().then((result) => {
      setExpense(result);
    });
  }, []);

  useEffect(() => {
    newsService.getAllPosts().then((result) => {
      setPost(result);
    });
  }, []);

  return (
      <div>
        <Header />
          <CardContext.Provider value={{ cardAdd, cardEdit, cardDel }}>
            <NewsPostContext.Provider value={{ newsAdd, newsEdit, newsDel }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/dashboard"
                  element={<Dashboard cards={cards} expense={expense} />}
                />
                
                <Route path="/news" element={<News post={post} />} />
                <Route path="/newPost" element={<CreateNewsPost />} />
                <Route path="/news/:newsId" element={<NewsDetails post={post} />} />
                <Route path="/newsDelete/:newsId" element={<DeletePost />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/addCard" element={<CreateCard />} />
                <Route path="/addExpense" element={<CreateExpense />} />
                <Route path="/card/:cardId" element={<CardDetails cards={cards} />} />
                <Route path="/cardDelete/:cardId" element={<DeleteCard />} />
                <Route
                  path="/card/:cardId/edit"
                  element={<EditCard cards={cards} />}
                />
                <Route
                  path="/news/:newsId/edit"
                  element={<EditPost expense={expense} />}
                />
              </Routes>
            </NewsPostContext.Provider>
          </CardContext.Provider>
        <Footer />
      </div>
  );
}

export default App;
