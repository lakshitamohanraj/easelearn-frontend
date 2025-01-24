import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutUsPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#232f34",
        color: "#f9aa33",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        EaseLearn is dedicated to providing top-notch educational resources.
        Learn about our mission and vision.
      </Typography>
      <Typography variant="body2" align="justify" sx={{ marginTop: 2 }}>
        At EaseLearn, we believe in the power of education to transform lives.
        Our goal is to make high-quality educational content accessible to
        everyone. Whether you're a student, a professional, or someone eager to
        learn, EaseLearn is your go-to platform for curated resources.
      </Typography>
    </Box>
  );
}
