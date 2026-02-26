import React, { useContext, useEffect, useState } from 'react'
import UserHeader from './Components/UserHeader';
import { Outlet, Navigate } from 'react-router-dom';
import { UserAuthContext } from '../../Context/UserAuthContext';
import AuthAPI from './Components/UserAPI/AuthAPI';
export default function UserHomePage() {

  const { userSession } = useContext(UserAuthContext);

  useEffect(()=>{
    AuthAPI;
  },[]);

  if (!userSession) {
    return <Navigate to='/' replace />
  }

  return (
    <React.Fragment>
      <UserHeader />
      <Outlet />


    </React.Fragment>
  );
};

