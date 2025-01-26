import React, { useState } from "react";
import { Box } from "@mui/material";
import TeacherCard from "../../components/SearchTeachers/TeacherCard";
import ConnectPopup from "../../components/SearchTeachers/ConnectPopup";
import Filters from "../../components/SearchTeachers/Filters";
import TeacherProfilePage from "../../components/SearchTeachers/TeacherProfile";

import { dummyTeachers } from "../../data/dashboard/teacher";



const SelectTeachers = () => {
  const [filters, setFilters] = useState({
    search: "",
    duration: "",
    language: "",
    level: "",
    availability: "",
  });

  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredTeachers = dummyTeachers.filter((teacher) => {
    // Apply filtering based on filters
    return (
      (!filters.search || teacher.name.toLowerCase().includes(filters.search.toLowerCase())) &&
      (!filters.duration || teacher.duration === filters.duration) &&
      (!filters.language || teacher.language === filters.language) &&
      (!filters.level || teacher.level === filters.level) &&
      (!filters.availability || teacher.availability === filters.availability)
    );
  });

  return (
    <Box sx={{ padding: 4 , backgroundColor:"white"}}>
      <Filters
        filters={[
          { name: "duration", label: "Duration of Course", options: ["1 Month", "3 Months", "6 Months"], value: filters.duration },
          { name: "language", label: "Language of Teaching", options: ["English", "Hindi"], value: filters.language },
          { name: "level", label: "Teaching Level", options: ["Beginner", "Intermediate", "Advanced"], value: filters.level },
          { name: "availability", label: "Availability", options: ["Morning", "Afternoon", "Evening"], value: filters.availability },
        ]}
        onFilterChange={handleFilterChange}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {filteredTeachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            {...teacher}
            onViewProfile={() => setSelectedTeacher(teacher)}
            onRequestConnect={() => setPopupOpen(true)}
          />
        ))}
      </Box>

      {selectedTeacher && (
        <TeacherProfilePage
          profilePic={selectedTeacher.profilePic}
          name={selectedTeacher.name}
          contactDetails="contact@example.com"
          education="M.Tech in Computer Science"
          experience="5+ years of teaching Java"
          reviews="Excellent teacher with in-depth knowledge."
        />
      )}

      <ConnectPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </Box>
  );
};

export default SelectTeachers;
