import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ContactTableRow from "../components/ContactTableRow";
import AddContactDialog from "../components/AddContactDialog";

function Dashboard({ username, onLogout }) {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "098-765-4321",
      },
    ];
  });

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddContact = () => {
    setIsAddDialogOpen(true);
  };

  const handleAddContactSubmit = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
  };

  return (
    <div className="Dashboard" style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Welcome, {username}!</h2>
        <Button variant="contained" color="secondary" onClick={onLogout}>
          Logout
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3>Contacts</h3>
        <Button variant="contained" color="primary" onClick={handleAddContact}>
          Add Contact
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Phone</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <ContactTableRow
                key={contact.id}
                contact={contact}
                onDelete={() => {
                  const updatedContacts = contacts.filter((c) => c.id !== contact.id);
                  setContacts(updatedContacts);
                }}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddContactDialog
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAdd={handleAddContactSubmit}
      />
    </div>
  );
}
export default Dashboard;
