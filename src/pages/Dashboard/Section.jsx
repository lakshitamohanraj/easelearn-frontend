import React from "react";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
const Section = ({ title, items, renderItem }) => (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        backgroundColor: "#344955",
        color: "white",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#F9AA33",
          marginBottom: 2,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      {items.map(renderItem)}
    </Paper>
  );
  export default Section;