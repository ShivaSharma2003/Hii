import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./Screens/SignUp";
import { useEffect, useState } from "react";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";

function App() {
  const [accountLoggedIn, setaccountLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accountLoggedIn) {
      navigate("/register/account");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route Component={Home} path="/"></Route>
        <Route Component={SignUp} path="/register/account"></Route>
        <Route Component={SignIn} path="/login/account"></Route>
      </Routes>
    </>
  );
}

export default App;
