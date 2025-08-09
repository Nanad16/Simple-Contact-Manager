import React from "react";
import Card from "../components/Card";
import { Button } from "@mui/material";

function Dashboard({ username, onLogout }) {
  return (
    <div className="Dashboard">
      <Card style={{ maxWidth: 345, margin: '20px auto', padding: '20px' }}>
        <h2>Dashboard</h2>
        <p>Welcome, {username}!</p>
        <Button
          variant="contained"
          color="secondary"
          onClick={onLogout}
          style={{ marginTop: '20px' }}
        >
          Logout
        </Button>
      </Card>
    </div>
  );
}
export default Dashboard;