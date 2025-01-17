import { LineAxis, Padding } from "@mui/icons-material";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";


const HomePage = ()=>{
    return (
      
      <Box sx={{ padding: 4 }}>
        <div style = {{padding : "10px"}}>

        <Typography
        variant="h4"
        sx={{
          color: "#F9AA33",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Welcome to EaseLearn
      </Typography>

      <Typography variant="body1" align="center" sx={{ marginTop: 2,marginBottom: 5}}>
        Explore the best educational content from various sources like YouTube,
        websites, and courses.
      </Typography>
      </div>
     
      <Typography variant="h6">
        What is EaseLearn ?
      </Typography>
      <Divider variant="middle" /><br></br>
      <Typography  variant="body1"  sx={{ marginTop: 2,marginBottom: 5}}>
      EaseLearn is a platform designed to enhance communication and collaboration in education.
       Its primary goal is to connect students with the right teachers while providing opportunities for 
      teachers to showcase their skills, refine their teaching methodologies, and grow professionally.
      </Typography>



      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              backgroundColor: "#344955",
              color: "#FFFFFF",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#F9AA33", fontWeight: "bold", marginBottom: "10px" }}
            >
              EaseLearn Offers:
            </Typography>

            <Typography
              variant="body1"
              sx={{ marginBottom: "20px", lineHeight: "1.8", color: "#FFFFFF" }}
            >
              <strong>For Students:</strong> Personalized learning experiences, interactive classes, and tools to track progress, enabling them to find the ideal teacher for their needs.
            </Typography>

            <Typography
              variant="body1"
              sx={{ marginBottom: "20px", lineHeight: "1.8", color: "#FFFFFF" }}
            >
              <strong>For Teachers:</strong> A chance to engage with diverse learners, receive constructive feedback, and collaborate with other educators to improve their teaching styles.
            </Typography>

            <Typography
              variant="body1"
              sx={{ lineHeight: "1.8", color: "#FFFFFF" }}
            >
              <strong>Purpose:</strong> The platform nurtures society by promoting online tutoring and bridging the gap between students and educators. It emphasizes collaboration, growth, and accessibility in education.
            </Typography>
          </Paper>
        </Grid>
      </Grid>


    </Box>
    )
}

export default HomePage;