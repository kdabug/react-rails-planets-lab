import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

export default props => {
  const { toggle, planetList, handleDelete, editPlanet, toggleCreate } = props;
  return (
    <div className="user-form-container">
      <h2>Create Planet</h2>
      <button onClick={toggleCreate}>
        {toggle ? "Show Less" : "Show Creation Form"}
      </button>
      {planetList &&
        planetList.map(planet => (
          <div>
            <h2>{planet.name}</h2>
            <p>{planet.distance_from_sun}</p>
            <p>{planet.orbit_period}</p>
            <p>{planet.diameter}</p>
            <button onClick={() => handleDelete(planet)}>Delete Planet</button>
            <button onClick={() => editPlanet(planet)}>Edit Planet</button>
          </div>
        ))}
    </div>
  );
};
