import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

import { Button } from '@mui/material';

function App() {
  // create a state to store the username and password


  // create a function to handle login
  const handleLogin = () => {
    // Logic for handling login can be added here
    console.log("Login button clicked");
  }; 




  return (
    <div className="App">
     <Card style={{ maxWidth: 345, margin: '20px auto' }}>
       {/* Create a username and password input field */}
      <h2>Welcome to My App</h2>
      <p>Please enter your credentials below:</p>
      <input type="text" placeholder="Username" style={{ margin: '10px 0', padding: '8px', width: '80%' }} />
      <input type="password" placeholder="Password" style={{ margin: '10px 0', padding: '8px', width: '80%' }} />
    
    </Card>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleLogin}>
        Login
      </Button>
      


    </div>
  );
}

export default App;
