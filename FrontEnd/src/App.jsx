import React, { useState } from "react";
import CoreRouter from "./AppRouter/CoreRouter";
import { AuthContext } from "./Context/authContext"
import UserRouter from "./AppRouter/UserRouter";
import { UserAuthContext } from "./Context/UserAuthContext";

function App() {

  const [userLoginedIn, setUserLoginedIn] = useState(false);
  const [userSession, setUserSession] = useState(false);

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ userLoginedIn, setUserLoginedIn }}>
        <CoreRouter />
      </AuthContext.Provider>



      <UserAuthContext.Provider value={{ userSession, setUserSession }}>
        <UserRouter />
      </UserAuthContext.Provider>


    </React.Fragment>
  );
}

export default App;
