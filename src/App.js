
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './RoutersComponent/Navbar';
import Home from './RoutersComponent/Home';
import Contact from './RoutersComponent/Contact';
import About from './RoutersComponent/About.js';
import Login from './RoutersComponent/Login';
import Signin from './RoutersComponent/Signin';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/contactus' element={<Contact/>} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>

  );
}

export default App;
