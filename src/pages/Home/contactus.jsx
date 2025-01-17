import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function ContactUsPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#344955",
        color: "#f9aa33",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        Reach out to us with your queries, feedback, or suggestions.
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          margin: "0 auto",
          gap: 2,
        }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiInputBase-input": { color: "white" }, // Input text color
            "& .MuiInputLabel-root": { color: "white" }, // Label text color
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Border color
              "&:hover fieldset": { borderColor: "#f9aa33" }, // Hover border color
              "&.Mui-focused fieldset": { borderColor: "#f9aa33" }, // Focus border color
            },
          }}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiInputBase-input": { color: "white" }, // Input text color
            "& .MuiInputLabel-root": { color: "white" }, // Label text color
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Border color
              "&:hover fieldset": { borderColor: "#f9aa33" }, // Hover border color
              "&.Mui-focused fieldset": { borderColor: "#f9aa33" }, // Focus border color
            },
          }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{
            "& .MuiInputBase-input": { color: "white" }, // Input text color
            "& .MuiInputLabel-root": { color: "white" }, // Label text color
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Border color
              "&:hover fieldset": { borderColor: "#f9aa33" }, // Hover border color
              "&.Mui-focused fieldset": { borderColor: "#f9aa33" }, // Focus border color
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f9aa33", color: "#344955" }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
