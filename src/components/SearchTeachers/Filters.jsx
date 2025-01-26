// Filters.jsx
import React from "react";
import { Box, TextField, MenuItem, Typography } from "@mui/material";

const Filters = ({ filters, onFilterChange }) => {
  return (
    <Box sx={{ display: "flex",flexDirection:"column" , gap: 2, mb: 4 }}>
      <Box>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={(e) => onFilterChange("search", e.target.value)}
      />
      </Box>
      <Box sx={{display:"flex", gap:2, mb:4, borderRadius:"0px",}} >
      {filters.map((filter) => (
        <TextField
        sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px", // Rounded corners
              backgroundColor: "#f9aa33", // Background color
            },
            "& .MuiInputBase-input": {
              color: "#333", // Input text color
            },
          }}
          key={filter.name}
          select
          label={filter.label}
          fullWidth
          value={filter.value}
          onChange={(e) => onFilterChange(filter.name, e.target.value)}
        >
          {filter.options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      ))}
      </Box>
    </Box>
  );
};

export default Filters;
