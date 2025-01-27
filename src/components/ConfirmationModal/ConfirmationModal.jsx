import React from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const ConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete this contact?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
