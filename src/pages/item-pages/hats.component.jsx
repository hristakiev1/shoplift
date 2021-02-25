import React, { Component } from "react";

const Hats = ({ match }) => {
  return <h1>{match.path.toUpperCase()}</h1>;
};

export default Hats;
