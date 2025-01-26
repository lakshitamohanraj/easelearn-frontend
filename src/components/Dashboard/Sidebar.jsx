import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState(null);

  // Handle link click to set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <nav style={{ flex: 1, marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "20px",
            gap: "20px", // Increased spacing between links
          }}
        >
          <Link
            to="/student-dashboard"
            style={{
              color: activeLink === "/student-dashboard" ? "#f9aa33" : "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onClick={() => handleLinkClick("/student-dashboard")}
            onMouseEnter={(e) => (e.target.style.color = "#f9aa33")}
            onMouseLeave={(e) => (e.target.style.color = activeLink === "/student-dashboard" ? "#f9aa33" : "white")}
          >
            Dashboard
          </Link>
          <Link
            to="/select-teachers"
            style={{
              color: activeLink === "/select-teachers" ? "#f9aa33" : "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onClick={() => handleLinkClick("/select-teachers")}
            onMouseEnter={(e) => (e.target.style.color = "#f9aa33")}
            onMouseLeave={(e) => (e.target.style.color = activeLink === "/select-teachers" ? "#f9aa33" : "white")}
          >
            Select Teachers
          </Link>
          <Link
            to="/profile"
            style={{
              color: activeLink === "/profile" ? "#f9aa33" : "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onClick={() => handleLinkClick("/profile")}
            onMouseEnter={(e) => (e.target.style.color = "#f9aa33")}
            onMouseLeave={(e) => (e.target.style.color = activeLink === "/profile" ? "#f9aa33" : "white")}
          >
            Profile
          </Link>
        </div>
      </nav>
      <button
        style={{
          marginTop: "auto",
          backgroundColor: "#d32f2f",
          color: "white",
          padding: "10px",
          border: "none",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
