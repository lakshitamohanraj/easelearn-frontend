import React from "react";

const RequestedTeacherCard = ({ teacher }) => {
  return (
    <div
      style={{
        border: "1px solid #f9aa33",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        backgroundColor: "#232f34",
        color: "white",
      }}
    >
      <h3>Teacher: {teacher}</h3>
      <button
        style={{
          backgroundColor: "#f9aa33",
          color: "white",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Cancel Request
      </button>
    </div>
  );
};

export default RequestedTeacherCard;
