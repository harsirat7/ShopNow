import React, { useContext } from 'react'
import {UserAuthContext} from "../../../../Context/UserAuthContext";

export default async function AuthAPI() {

    const {setUserSession}=useContext(UserAuthContext);
  
    const checkUSerSession = await fetch("http://localhost:3000/user/checkUserSession", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const userSession=checkUSerSession.json();
    setUserSession(userSession);
  
    return null;
};


