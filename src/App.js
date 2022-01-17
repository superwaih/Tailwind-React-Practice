import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hideMenu = () =>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i changed')
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
     <Routes>
       <Route path='/' exact element={<Home/> } />
       <Route path='/about' element={<About /> } />
       <Route path='/menu' element={<Menu /> } />
       <Route path='/contact' element={<Contact/> } />



     </Routes>
      <Footer />
    </>
  );
}

export default App;
