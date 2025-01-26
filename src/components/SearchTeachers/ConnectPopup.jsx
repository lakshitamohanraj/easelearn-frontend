// ConnectPopup.jsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";

const ConnectPopup = ({ open, onClose }) => {
  const [message, setMessage] = useState("");

  const handleSendRequest = () => {
    console.log("Message sent:", message);
    setMessage("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 4,
          boxShadow: 24,
          width: "80%",
          maxWidth: 400,
          borderRadius: 2,
        }}
      >
        <Typography sx={{color:"#4a6572",}} variant="h6" mb={2}>
          Send a Connection Request
        </Typography>
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", }}>
          <Button sx={{color:"#4a6572", border:"none"}} variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" sx={{backgroundColor:"#4a6572",}} onClick={handleSendRequest}>
            Send Request
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConnectPopup;
