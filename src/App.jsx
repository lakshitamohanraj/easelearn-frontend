
import './App.css'
import  Header  from './components/Home'
import ParentHome from './components/Home'
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
     <ParentHome/>
     </Router>
    // <div className="min-h-screen flex justify-center items-center bg-gray-100">
    //   <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
    // </div>
  )
}

export default App
