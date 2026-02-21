import React, { useState } from "react";
import CoreRouter from "./AppRouter/CoreRouter";
import { AuthContext } from "./Context/authContext"
import UserRouter from "./AppRouter/UserRouter";

function App() {

  const [userLoginedIn, setUserLoginedIn] = useState(false);

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ userLoginedIn, setUserLoginedIn }}>
        <CoreRouter />
      </AuthContext.Provider>

      <UserRouter />


    </React.Fragment>
  );
}

export default App;
