import { Routes, Route, useNavigate } from "react-router-dom";
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

import * as cardService from "./service/cardService";
import * as expenseService from "./service/expenseService";
import * as newsService from "./service/newsService";
import { AuthContext } from "./context/AuthContext";

function App() {
  // check delete functionality
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [expense, setExpense] = useState([]);
  const [post, setPost] = useState([]);
  //const [auth, setAuth] = useState({});

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

  // const userLogin = async (authData) => {
  //   setAuth(authData);
  // };

  return (
    // <AuthContext.Provider value={{ auth, userLogin }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={<Dashboard cards={cards} expense={expense} />}
          />
          <Route path="/news" element={<News post={post} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/addCard" element={<CreateCard />} />
          <Route path="/addExpense" element={<CreateExpense />} />
          <Route path="/newPost" element={<CreateNewsPost />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/news/:newsId" element={<NewsDetails post={post} />} />
          <Route path="/card/:cardId" element={<CardDetails cards={cards} />} />
          <Route
            path="/card/:cardId/edit"
            element={<EditCard cards={cards} />}
          />

          <Route
            path="/news/:newsId/edit"
            element={<EditPost expense={expense} />}
          />
        </Routes>
        <Footer />
      </div>
    // </AuthContext.Provider>
  );
}

export default App;
