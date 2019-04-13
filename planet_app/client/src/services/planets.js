import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const createPlanet = async user => {
  const respData = await axios.post(`${BASE_URL}planets`, user);
  console.log("this is create user: resp", respData);
  return respData;
};

const updatePlanet = async (id, edits) => {
  console.log("making an edit request with this data", edits);
  const respData = await axios.put(`${BASE_URL}planets/${id}/`, edits);
  console.log("this is edit: resp", respData);
  return respData;
};

const fetchPlanets = async () => {
  const respData = await axios.get(`${BASE_URL}planets`);
  console.log("this is fetchPlanet: resp", respData);
  return respData;
};

const deletePlanet = async id => {
  const respData = await axios.delete(`${BASE_URL}planets/${id}`);
  console.log("this is delete: resp", respData);
  return respData;
};

export { fetchPlanets, updatePlanet, deletePlanet, createPlanet };
