import React from 'react';

import './App.css';
import Header from "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

import{
  Routes,
  Route,
  // Link
  } from "react-router";

import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      

    </div>
  );
}

export default App;
