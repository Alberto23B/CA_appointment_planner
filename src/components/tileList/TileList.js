import React from "react";
import Tile from "../tile/Tile"

export const TileList = (props) => {
  return (
    <div>
      {props.map((obj, i) =>
        <Tile name={name} description={description} />
      )}
    </div>
  );
};
