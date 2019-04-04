import React from "react";

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
            <p>{planet.name}</p>
            <button onClick={() => handleDelete(planet)}>Delete Planet</button>
            <button onClick={() => updatePlanet(planet)}>Edit Planet</button>
          </div>
        ))}
    </div>
  );
};
