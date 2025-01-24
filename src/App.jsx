<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './student/pages/LoginPage/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    hello
    <LoginPage/>
    </>
=======

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
      </Routes>
    </div>
    {!hideHeaderRoutes.includes(location.pathname) && <Footer />}
  </>
>>>>>>> 7d53a95961046e5d11c35c195dc90ab688f4b38d
  )
}

export default App
