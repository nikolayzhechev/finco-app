import { Routes, Route} from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Dashboard } from './components/Dashboard/Dashboard';
import { News } from './components/News/News';
import { Login } from './components/Users/Login';
import { Register } from './components/Users/Register';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;