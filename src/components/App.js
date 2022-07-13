import React, { useState, useEffect } from "react";
import SignUp from "./Authorization/SignUp";
import Login from "./Authorization/Login";
import Splash from "./Splash/Splash";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import About from "./About/About";
import InfoTooltip from "./Authorization/InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "../utils/auth.js";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterSuccess, setRegisterInfo] = useState(false);
  const [registerInfo, openRegisterInfo] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setEmail(data.data.email);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
        }
        setEmail(email);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegister = (email, password) => {
    auth
      .register(password, email)
      .then((data) => {
        setRegisterInfo(true);
        navigate("/sign-in");
      })
      .catch((err) => {
        setRegisterInfo(false);
        console.error(err);
      })
      .finally(() => {
        openRegisterInfo(true);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setEmail("");
    setIsLoggedIn(false);
    navigate("/sign-in");
  };

  const closeAllPopups = () => {

    openRegisterInfo(false);

  };

  return (
    <div>
      <Header
        isloggedIn={isLoggedIn}
        handleLogout={handleLogout}
        email={email}
      />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route
          path="/sign-up"
          element={<SignUp handleRegister={handleRegister} />}
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/games" element={<ProtectedRoute isLoggedIn={isLoggedIn}> <Menu/> </ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            isLoggedIn ? <Navigate to="/games" /> : <Navigate to="/sign-in" />
          }
        />
      </Routes>
      <Footer />

      <InfoTooltip
        isCorrect={isRegisterSuccess}
        onClose={closeAllPopups}
        isOpen={registerInfo}
      />
    </div>
  );
}

export default App;
