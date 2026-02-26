import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from '../Components/Core/HomePage'
import UserPassWord from '../Components/Core/UserPassWord'
import Electronics from '../Components/Core/Electronics'
import UserHomePage from '../Components/User/UserHomePage'

export default function CoreRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/electronics' element={<Electronics />} />
      <Route path='/Login' element={<UserPassWord />} />

      <Route path='/userDashBoard' element={<UserHomePage />}>
        <Route path='Profile' />
        <Route path='orders' />
        <Route path='sellProduct' />
        <Route path='Inventory' />
      </Route>

    </Routes>
  );
};

