import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DrawerComp from "./DrawerComp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TabContext, TabPanel,TabList } from "@mui/lab";
import HomePage from "../../pages/home";
import AboutUsPage from "../../pages/aboutus";
import ServicesPage from "../../pages/services";
import ContactUsPage from "../../pages/contactus";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/login";
import RegisterPage from "../../pages/RegisterPage/register";

export default function Header() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Pages = ["HOME", "About Us", "Services", "Contact Us"];
  function handleChange(event, newValue) {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/about");
        break;
      case 2:
        navigate("/contact");
        break;
      case 3:
        navigate("/services");
        break;
      default:
        break;
    }
  }
  function handleLoginClick(){
    navigate("/login"); 
  }

  function handleSignUpClick(){
    navigate("/signup"); 
  }

  return (
    <React.Fragment>
      <AppBar  sx={{ backgroundColor: "#344955" }}>
        <Toolbar>
          <LocalLibraryIcon />
          {isMatch ? (
            <>
              <Typography>EASELEARN</Typography>
              <DrawerComp Pages={[...Pages, "Login", "Sign Up"]} />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(event, value) => handleChange(event, value)}
                indicatorColor="secondary"
              >
                {Pages.map((value, index) => (
                  <Tab key={index} label={value}></Tab>
                ))}
              </Tabs>
              <Button
                sx={{ marginLeft: "auto", backgroundColor: "#F9AA33" }}
                variant="contained"
                onClick={()=>handleLoginClick()}
              >
                Login
              </Button>
              <Button
                sx={{ marginLeft: "10px", backgroundColor: "#F9AA33" }}
                variant="contained"
                onClick = {()=>handleSignUpClick()}
              >
                Sign Up
              </Button>
            </>
          )
          }
        </Toolbar>
        
      </AppBar>
     
     <Routes>

                  <Route path="/home" element={<HomePage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/contact" element={<ContactUsPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/login" element={<LoginPage/>} />
                  <Route path="/signup" element={<RegisterPage/>} />

    </Routes>

    </React.Fragment>
  );
}
