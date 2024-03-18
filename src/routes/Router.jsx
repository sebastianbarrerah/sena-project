import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../page/login/Login';
import Home from '../page/home/Home';

const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default Router;
