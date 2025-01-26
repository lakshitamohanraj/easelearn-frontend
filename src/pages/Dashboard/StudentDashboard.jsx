import React from "react";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import Sidebar from "../../components/Dashboard/Sidebar";
import DrawerComp from "../../components/Home/DrawerComp";
import NotesCard from "../../components/Dashboard/NotesCard";
import OngoingClassCard from "../../components/Dashboard/OngoingClassCard";
import UpcomingClassCard from "../../components/Dashboard/UpcomingClassCard";
import RequestedTeacherCard from "../../components/Dashboard/RequestedTeacherCard";
import { notes, ongoingClasses, upcomingClasses, requestedTeachers } from "../../data/dashboard/dashboard";
import Section from "./Section";

const StudentDashboard = () => {
  // Check if the screen is smaller than 900px
  const isMobile = useMediaQuery("(max-width: 900px)");

  // Pages for DrawerComp
  const pages = ["Dashboard", "Select Teachers", "Profile"];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: isMobile ? "column" : "row" }}>
      {/* Sidebar or Drawer */}
      {isMobile ? (
        <Box sx={{ backgroundColor: "#344955", color: "white", padding: 2 }}>
          <DrawerComp Pages={pages} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "25%",
            backgroundColor: "#344955",
            color: "white",
            padding: 2,
          }}
        >
          <Sidebar />
        </Box>
      )}

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flex: 1,
          gap: isMobile ? 2 : 4,
          padding: isMobile ? 2 : 4,
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Middle Section */}
        <Box
          sx={{
            flex: isMobile ? "1" : "0 0 60%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Section
            title="Notes"
            items={notes}
            renderItem={(note) => <NotesCard key={note.id} {...note} />}
          />
          <Section
            title="Ongoing Classes"
            items={ongoingClasses}
            renderItem={(cls) => <OngoingClassCard key={cls.id} {...cls} />}
          />
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: isMobile ? "1" : "0 0 35%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Section
            title="Upcoming Classes"
            items={upcomingClasses}
            renderItem={(cls) => <UpcomingClassCard key={cls.id} {...cls} />}
          />
          <Section
            title="Requested Teachers"
            items={requestedTeachers}
            renderItem={(teacher) => <RequestedTeacherCard key={teacher.id} {...teacher} />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
