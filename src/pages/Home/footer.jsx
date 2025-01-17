import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#344955", padding: 2, color: "#fff" }}>
      <Typography variant="body1" align="center">
        Contact Us: aprank@gmail.com | 9783489396
      </Typography>
      <Typography variant="body2" align="center">
        All Copy rights 2023 under India
      </Typography>
    </Box>
  );
}
