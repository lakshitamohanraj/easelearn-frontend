import React from "react";

const OngoingClassCard = ({ teacher, topic }) => {
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
      <h3>{topic}</h3>
      <p>Teacher: {teacher}</p>
      <button
        style={{
          backgroundColor: "#f9aa33",
          color: "white",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Join Chat
      </button>
    </div>
  );
};

export default OngoingClassCard;
