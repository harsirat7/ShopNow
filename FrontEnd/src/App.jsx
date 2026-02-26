import React, { useState } from "react";
import CoreRouter from "./AppRouter/CoreRouter";
import { AuthContext } from "./Context/authContext"
import { UserAuthContext } from "./Context/UserAuthContext";

function App() {

  const [userLoginedIn, setUserLoginedIn] = useState(false);
  const [userSession, setUserSession] = useState(false);

  return (
    <React.Fragment>

      <AuthContext.Provider value={{ userLoginedIn, setUserLoginedIn }}>
        <UserAuthContext.Provider value={{ userSession, setUserSession }}>
          <CoreRouter />
        </UserAuthContext.Provider>
      </AuthContext.Provider>

    </React.Fragment>
  );
}

export default App;
