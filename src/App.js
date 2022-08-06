import { Routes, Route, useNavigate } from "react-router-dom";
import * as fireBaseService from "./firebase/firebaseConfig";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { News } from "./components/News/News";
import { Login } from "./components/Users/Login";
import { Register } from "./components/Users/Register";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Users/Profile";

import { CreateCard } from "./components/Create/CreateCard";
import { CreateExpense } from "./components/Create/CreateExpense";

function App() {
  //   Use context if needed
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/addCard" element={<CreateCard />} />
        <Route path="/addExpense" element={<CreateExpense />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
