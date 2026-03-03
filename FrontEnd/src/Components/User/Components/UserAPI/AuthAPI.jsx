import React, { useContext } from 'react'
import {UserAuthContext} from "../../../../Context/UserAuthContext";

export default async function AuthAPI() {
    const response = await fetch(
        "http://localhost:3000/user/checkUserSession",
        {
            credentials: "include"
        }
    );

    const data = await response.json();
    return data.UserSession;
}


