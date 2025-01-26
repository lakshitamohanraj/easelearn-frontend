import React from "react";

const UpcomingClassCard = ({ teacher, time }) => {
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
      <p>Time: {time}</p>
    </div>
  );
};

export default UpcomingClassCard;
