import React from 'react'
import { Routes,Route } from 'react-router'
import HomePage from '../Components/Core/HomePage'
import UserPassWord from '../Components/Core/UserPassWord'
import Electronics from '../Components/Core/Electronics'

export default function CoreRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/Login' element={<UserPassWord/>}/>
    </Routes>
  );
};

