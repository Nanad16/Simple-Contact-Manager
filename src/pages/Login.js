import React from "react";
import Card  from "../components/Card";
import { Button } from "@mui/material";
import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login with credential check
  const handleLogin = () => {
    // Example: username = "admin", password = "password"
    if (password === 'password') {
      onLogin(username, true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="Login">
      <Card style={{ maxWidth: 345, margin: '20px auto', padding: '20px' }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ margin: '10px 0', padding: '8px', width: '80%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ margin: '10px 0', padding: '8px', width: '80%' }}
        />
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </Card>
    </div>
  );
}
export default Login;