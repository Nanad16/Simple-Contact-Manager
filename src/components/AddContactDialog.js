import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function AddContactDialog({ open, onClose, onAdd }) {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!newContact.name.trim()) newErrors.name = "Name is required";
    if (!newContact.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(newContact.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!newContact.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(newContact.phone)) {
      newErrors.phone = "Phone format should be XXX-XXX-XXXX";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onAdd({
        ...newContact,
        id: Date.now(), // Simple way to generate unique id
      });
      setNewContact({ name: "", email: "", phone: "" });
      onClose();
    }
  };

  const handleChange = (field) => (event) => {
    setNewContact({
      ...newContact,
      [field]: event.target.value,
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Contact</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={newContact.name}
          onChange={handleChange("name")}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={newContact.email}
          onChange={handleChange("email")}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          margin="dense"
          label="Phone"
          type="tel"
          fullWidth
          value={newContact.phone}
          onChange={handleChange("phone")}
          error={!!errors.phone}
          helperText={errors.phone || "Format: XXX-XXX-XXXX"}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add Contact
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddContactDialog;
