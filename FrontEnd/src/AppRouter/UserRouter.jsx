import React from 'react'
import { Route, Routes } from 'react-router'
import UserHomePage from '../Components/User/UserHomePage'


export default function UserRouter() {
  return (
    <Routes>
      <Route path='/userDashBoard' element={<UserHomePage />}>
        <Route path='Profile'/>
        <Route path='orders' />
        <Route path='sellProduct' />
        <Route path='Inventory' />
      </Route>
    </Routes>
  )
}
