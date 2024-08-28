import React from "react";

export const Tile = ({ name, description }) => {
  const array = Object.values(description)
  return (
    <div className="tile-container">
      <p>{name}</p>
      {array.map((desc, index) => {
        return <p key={index}>{desc}</p>
      })}
    </div>
  );
};

