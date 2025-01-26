// TeacherProfilePage.jsx
import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";

const TeacherProfilePage = ({ profilePic, name, contactDetails, education, experience, reviews }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Avatar src={profilePic} sx={{ width: 100, height: 100, mb: 2 }} />
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Contact: {contactDetails}
      </Typography>
      <Typography variant="h6" mt={3}>
        Education
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {education}
      </Typography>
      <Typography variant="h6" mt={3}>
        Experience
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {experience}
      </Typography>
      <Typography variant="h6" mt={3}>
        Reviews
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {reviews}
      </Typography>
    </Box>
  );
};

export default TeacherProfilePage;
