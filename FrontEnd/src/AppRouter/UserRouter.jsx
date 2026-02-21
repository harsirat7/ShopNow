import React from 'react'
import { Route, Routes } from 'react-router'
import UserHomePage from '../Components/User/UserHomePage'
import UserProfile from '../Components/User/Components/Body/UserProfile'
import YourOrders from '../Components/User/Components/Body/YourOrders'
import SellYourProduct from '../Components/User/Components/Body/SellYourProduct'
import YourInventory from '../Components/User/Components/Body/YourInventory'

export default function UserRouter() {
  return (
    <Routes>
      <Route path='/userDashBoard' element={<UserHomePage />}>
        <Route path='Profile' element={<UserProfile/>}/>
        <Route path='orders' element={<YourOrders/>}/>
        <Route path='sellProduct' element={<SellYourProduct/>}/>
        <Route path='Inventory' element={<YourInventory/>} />
      </Route>
    </Routes>
  )
}
