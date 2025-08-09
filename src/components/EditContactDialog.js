import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function EditContactDialog({ open, onClose, onSave, contact }) {
  const [editedContact, setEditedContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (contact) {
      setEditedContact({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      });
    }
  }, [contact]);

  const validateForm = () => {
    const newErrors = {};
    if (!editedContact.name.trim()) newErrors.name = "Name is required";
    if (!editedContact.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(editedContact.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!editedContact.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(editedContact.phone)) {
      newErrors.phone = "Phone format should be XXX-XXX-XXXX";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSave(editedContact);
      onClose();
    }
  };

  const handleChange = (field) => (event) => {
    setEditedContact({
      ...editedContact,
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
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={editedContact.name}
          onChange={handleChange("name")}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={editedContact.email}
          onChange={handleChange("email")}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          margin="dense"
          label="Phone"
          type="tel"
          fullWidth
          value={editedContact.phone}
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
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditContactDialog;
