import React from "react";
import { useContext,useEffect,useState } from "react";
import { Navigate } from "react-router";
import AuthAPI from "./Components/UserAPI/AuthAPI";
import { UserAuthContext } from "../../Context/UserAuthContext";

// const { userSession } = useContext(UserAuthContext);

export default function UserHomePage() {

  const { userSession } = useContext(UserAuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const session = await AuthAPI();
      // setUserSession(session);
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!userSession) return <Navigate to="/" replace />;

  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}