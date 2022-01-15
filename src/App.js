
import React from 'react'
import Heder from './components/heder/Heder'
import './App.css'
import Home from './components/home/Home'
import { Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    
    </div>
  )
}

export default App
