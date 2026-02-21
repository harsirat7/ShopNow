import React from 'react'
import UserHeader from './Components/UserHeader';
import { Outlet } from 'react-router';
export default function UserHomePage() {
  return (
  <React.Fragment>
        <UserHeader/>
        <Outlet/>
  </React.Fragment>  
  );
};
