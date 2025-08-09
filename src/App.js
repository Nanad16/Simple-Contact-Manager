import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { Button } from '@mui/material';

function App() {
  // State for username, password, and login status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login
  const handleLogin = () => {
    // Add real authentication logic here
    setIsLoggedIn(true);
  };

  // Dashboard component
  const Dashboard = () => (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {username}!</p>
      {/* Add more dashboard content here */}
    </div>
  );

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Card style={{ maxWidth: 345, margin: '20px auto' }}>
          <h2>Welcome to My App</h2>
          <p>Please enter your credentials below:</p>
          <input
            type="text"
            placeholder="Username"
            style={{ margin: '10px 0', padding: '8px', width: '80%' }}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ margin: '10px 0', padding: '8px', width: '80%' }}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Card>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;