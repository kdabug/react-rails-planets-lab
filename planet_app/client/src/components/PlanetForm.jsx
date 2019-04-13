import React from "react";

export default props => {
  const {
    toggle,
    handleSubmit,
    handleChange,
    name,
    distance_from_sun,
    orbit_period,
    diameter
  } = props;
  return (
    <div className="user-form-container">
      {toggle && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="distance_from_sun"
            placeholder="distance_from_sun"
            value={distance_from_sun}
            onChange={handleChange}
          />
          <input
            type="text"
            name="orbit_period"
            placeholder="oribit_period"
            value={orbit_period}
            onChange={handleChange}
          />
          <input
            type="text"
            name="diameter"
            placeholder="diameter"
            value={diameter}
            onChange={handleChange}
          />
          <button type="submit" onClick={e => handleSubmit(e)}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
