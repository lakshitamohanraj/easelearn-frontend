// TeacherCard.jsx
import React from "react";
import { Box, Typography, Button, Avatar, Card, CardContent } from "@mui/material";

const TeacherCard = ({ profilePic, name, stars, experience, position, description, onViewProfile, onRequestConnect }) => {
  return (
    <Card sx={{ display: "flex", gap: 2, padding: 2, alignItems: "center" }}>
      <Avatar src={profilePic} sx={{ width: 56, height: 56 }} />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ⭐ {stars} | {experience}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {position}
        </Typography>
        <Typography variant="body2" mt={1}>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button sx={{backgroundColor:"#4a6572",}} variant="contained" onClick={onViewProfile}>
          View Profile
        </Button>
        <Button  sx={{color:"#4a6572",} }variant="outlined" onClick={onRequestConnect}>
          Request to Connect
        </Button>
      </Box>
    </Card>
  );
};

export default TeacherCard;
