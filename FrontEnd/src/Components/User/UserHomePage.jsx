import React, { useContext, useState } from 'react'
import UserHeader from './Components/UserHeader';
import { Outlet, useNavigate } from 'react-router';
import { UserAuthContext } from '../../Context/UserAuthContext';
export default function UserHomePage() {

  const {userSession}=useContext(UserAuthContext);
  const navigate=useNavigate();
  return (
  <React.Fragment>

          {
            userSession ? 
            <>
            <UserHeader/>
        <Outlet/>
            
            </>
            :
            navigate("/")
          }

  </React.Fragment>  
  );
};
