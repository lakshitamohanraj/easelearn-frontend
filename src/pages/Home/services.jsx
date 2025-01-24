import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function ServicesPage() {
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
        Our Services
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        Discover the services we offer to make learning easier and more
        accessible.
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Personalized Learning Plans"
            secondary="Tailored content for your unique learning needs."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Access to Best Resources"
            secondary="Curated videos, websites, and courses."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="24/7 Support"
            secondary="Our team is here to assist you anytime."
          />
        </ListItem>
      </List>
    </Box>
  );
}
