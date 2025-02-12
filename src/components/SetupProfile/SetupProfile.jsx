import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Container, Paper } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {submitTeacherProfile} from "../../Redux/TeacherProfile/Action";



const SetupProfile = () => {
    const dispatch = useDispatch();
    const { loading, error, profile } = useSelector((state) => state.teacherProfile);
    const jwt=localStorage.getItem("jwt");
    const userId = useSelector((state) => state.auth.userId);

    // Profile Fields
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [languages, setLanguages] = useState([]);
    const [dateOfJoin, setDateOfJoin] = useState("");
    // Education Fields
    const [educations, setEducations] = useState([]);
    
    // Experience Fields
    const [experiences, setExperiences] = useState([]);

    // Add Education Entry
    const addEducation = () => {
        setEducations([...educations, { name: "", description: "", startDate: "", endDate: "", proofFile: null }]);
    };

    // Add Experience Entry
    const addExperience = () => {
        setExperiences([...experiences, { name: "", description: "", startDate: "", endDate: "" }]);
    };

    // Handle Profile Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append("userId", userId);
        // formData.append("description", description);
        // formData.append("location", location);
     
        // formData.append("language", JSON.stringify(languages)); // Send languages as JSON
        // formData.append("dateOfJoin", new Date().toISOString().split("T")[0]);
    
        // // Convert `educations` to JSON and send proofFile separately
        // const educationsWithoutFile = educations.map((edu, index) => {
        //     if (edu.proofFile) {
        //         formData.append(`proofFile_${index}`, edu.proofFile); // Send proof file separately
        //     }
        //     return {
        //         name: edu.name,
        //         description: edu.description,
        //         startDate: edu.startDate,
        //         endDate: edu.endDate,
        //     };
        // });
    
        // formData.append("educations", JSON.stringify(educationsWithoutFile)); // Send as JSON
    
        // // Convert `experiences` to JSON
        // formData.append("experiences", JSON.stringify(experiences));
    
        
 // Dispatch Redux action to submit profile
//  dispatch(submitTeacherProfile(formData, jwt));
        
const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const convertFilePromises = educations.map(async (edu) => ({
    name: edu.name,
    description: edu.description,
    startDate: edu.startDate,
    endDate: edu.endDate,
    verified: true,
    proofFile: edu.proofFile ? await convertFileToBase64(edu.proofFile) : null, // Convert file to Base64
    proofURL: edu.proofFile ? URL.createObjectURL(edu.proofFile) : null // Temporary URL
}));

const processedEducations = await Promise.all(convertFilePromises);

const payload = {
    userId: userId,
    description: description,
    location: location,
    language: languages,
    dateOfJoin: new Date().toISOString().split("T")[0],
    education: processedEducations,
    experience: experiences.map((exp) => ({
        name: exp.name,
        description: exp.description,
        startDate: exp.startDate,
        endDate: exp.endDate
    }))
};

console.log("Final JSON Payload:", payload); // Debugging

// Dispatch Redux action with JSON payload
dispatch(submitTeacherProfile(payload, jwt));


    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4, width: "100%" }}>
                <Typography variant="h4" gutterBottom>Setup Your Profile</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        {/* Description */}
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth 
                                label="Description" 
                                multiline 
                                rows={4} 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                required 
                            />
                        </Grid>

                        {/* Location */}
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                label="Location" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} 
                                required 
                            />
                        </Grid>

                        {/* Languages */}
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                label="Languages (comma-separated)" 
                                onChange={(e) => setLanguages(e.target.value.split(","))} 
                                required 
                            />
                        </Grid>

                        

                        {/* Education Section */}
                        <Grid item xs={12}>
                            <Typography variant="h5">Education</Typography>
                        </Grid>
                        {educations.map((edu, index) => (
                            <Grid container spacing={2} key={index} sx={{padding:3}}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Degree Name" value={edu.name} onChange={(e) => {
                                        let newEducations = [...educations];
                                        newEducations[index].name = e.target.value;
                                        setEducations(newEducations);
                                    }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Course Details" value={edu.description} onChange={(e) => {
                                        let newEducations = [...educations];
                                        newEducations[index].description = e.target.value;
                                        setEducations(newEducations);
                                    }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Start Date" type="date" InputLabelProps={{ shrink: true }} value={edu.startDate} onChange={(e) => {
                                        let newEducations = [...educations];
                                        newEducations[index].startDate = e.target.value;
                                        setEducations(newEducations);
                                    }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="End Date" type="date" InputLabelProps={{ shrink: true }} value={edu.endDate} onChange={(e) => {
                                        let newEducations = [...educations];
                                        newEducations[index].endDate = e.target.value;
                                        setEducations(newEducations);
                                    }} required />
                                </Grid>
                                <Grid item xs={12}>
                                    <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => {
                                        let newEducations = [...educations];
                                        newEducations[index].proofFile = e.target.files[0];
                                        setEducations(newEducations);
                                    }} />
                                </Grid>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={addEducation}>+ Add Education</Button>
                        </Grid>

                        {/* Experience Section */}
                        <Grid item xs={12}>
                            <Typography variant="h5">Experience</Typography>
                        </Grid>
                        {experiences.map((exp, index) => (
                            <Grid container spacing={2} key={index} sx={{padding:3}}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Job Title" value={exp.name} onChange={(e) => {
                                        let newExperiences = [...experiences];
                                        newExperiences[index].name = e.target.value;
                                        setExperiences(newExperiences);
                                    }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Job Description" value={exp.description} onChange={(e) => {
                                        let newExperiences = [...experiences];
                                        newExperiences[index].description = e.target.value;
                                        setExperiences(newExperiences);
                                    }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="Start Date" type="date" InputLabelProps={{ shrink: true }} value={exp.startDate} onChange={(e) => {
                                        let newExperiences = [...experiences];
                                        newExperiences[index].startDate = e.target.value;
                                        setExperiences(newExperiences);
                                    }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth label="End Date" type="date" InputLabelProps={{ shrink: true }} value={exp.endDate} onChange={(e) => {
                                        let newExperiences = [...experiences];
                                        newExperiences[index].endDate = e.target.value;
                                        setExperiences(newExperiences);
                                    }} required />
                                </Grid>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={addExperience}>+ Add Experience</Button>
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                        <Button
    variant="contained"
    sx={{ backgroundColor: '#4a6572' }}
    type="submit"
  >
    Submit Profile                                
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default SetupProfile;
