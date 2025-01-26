

import './App.css'
import  Header  from './components/Home'
import ParentHome from './components/Home'
import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import HomePage from './pages/Home/home';
import AboutUsPage from './pages/Home/aboutus';
import ContactUsPage from './pages/Home/contactus';
import ServicesPage from './pages/Home/services';
import LoginPage from './pages/LoginPage/login';
import RegisterPage from './pages/RegisterPage/register';
import Footer from './pages/Home/footer';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import SelectTeachers from "./pages/SearchTeachers/SearchTeacher"; 



function App() {
  const location = useLocation() // Hook to track the current route
  const hideHeaderRoutes = ["/login", "/signup"];

  return (
    <>
    {!hideHeaderRoutes.includes(location.pathname) && <ParentHome/>}
    <div style={{ marginTop: !hideHeaderRoutes.includes(location.pathname) ? "80px" : "0px", minHeight: "80vh" }}>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/select-teachers" element={<SelectTeachers/>}  /> 
      </Routes>
    </div>
    {!hideHeaderRoutes.includes(location.pathname) && <Footer />}
  </>
  )
}

export default App
