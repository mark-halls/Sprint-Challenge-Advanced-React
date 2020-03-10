import React from "react";

const Player = props => {
  const { name, country, searches } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Times Searched: {searches}</p>
    </div>
  );
};

export default Player;
