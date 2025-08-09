import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { Button } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Check localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedLoginState = localStorage.getItem('isLoggedIn');
    
    if (storedLoginState === 'true' && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    // Clear localStorage on logout
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
  };

  const handleLogin = (username, loginState) => {
    setIsLoggedIn(loginState);
    setUsername(username);
    // Store login state in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', loginState);
    console.log(`User ${username} logged in: ${loginState}`);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default Main;
