import React from "react";

const Nav = props => {
  return (
    <button onClick={() => props.toggleDark()}>
      {props.toggleDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default Nav;
