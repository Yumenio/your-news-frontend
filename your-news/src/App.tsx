import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import axios from 'axios';
import ArticlePreview, { News } from './components/ArticlePreview';
import CategorySelector from './components/CategorySelector';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import useToken from './hooks/useToken';
import Register from './pages/Register';

function App() {
  const{token, setToken} = useToken();
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element= {<Login setToken={setToken}/>}/>
        <Route path="/signup" element={<Register setToken={setToken}/>}/>
      </Routes>
    </div>
  );
}

export default App;
