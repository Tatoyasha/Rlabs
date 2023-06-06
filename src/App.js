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
import AboutTeam from './Pages/AboutTeam';
import BlogPost from './Pages/BlogPost';

import { I18nextProvider } from 'react-i18next';
import i18n from './Components/i18n_locals';


function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/AboutTeam/:tID" element={<AboutTeam/>}/>
        <Route path="/BlogPost/:postId" element={<BlogPost/>} />
      </Routes>
    </div>
    </I18nextProvider>
  );
}

export default App;


      /* <Routes>
          <Route exact patch="/home" component={<Home/>} />
          <Route exact patch="/contacts" component={<Contacts/>} />
          <Route exact patch="/about" component={<About/>} />
          <Route exact patch="/blog" component={<Blog/>} />
        </Routes> */