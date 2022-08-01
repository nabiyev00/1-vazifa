import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
