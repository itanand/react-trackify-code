import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/myprofile' element={<MyProfile />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
