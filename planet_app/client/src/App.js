import React, { Component } from "react";
import axios from "axios";
import "./App.css";
const BASE_URL = "http://localhost:3000/";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: "",
      toggle: false,
      planetData: {
        name: "",
        distance_from_sun: "",
        orbit_period: "",
        diameter: ""
      }
    };
    this.getPlanets = this.getPlanets.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async getPlanets() {
    const respData = await axios.get(`${BASE_URL}/planets`);
    const planetList = respData.data;
    console.log("this is getPlanets : resp", planetList);
    this.setState((prevState, newState) => ({
      planetList
    }));
  }
  async handleSubmit() {
    const respData = await axios.post(
      `${BASE_URL}/planets`,
      this.state.planetData
    );
    this.setState((prevState, newState) => ({
      planetList: [...prevState.planetList, respData.data],
      planetData: {
        name: "",
        distance_from_sun: "",
        orbit_period: "",
        diameter: ""
      }
    }));
  }
  async handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("handleRegisterChange name, val", name, value);
    await this.setState(prevState => ({
      planetData: {
        ...prevState.planetData,
        [name]: value
      }
    }));
  }
  async handleDelete(planet) {
    const { id } = planet;
    console.log(`Deleting dragon with an id of ${id}`);
    await axios.get(`${BASE_URL}/planets/${id}/delete`, this.state.planetData);
    this.setState(prevState => ({
      dragonData: prevState.dragonData.filter(dragon => dragon.id !== id)
    }));
  }

  toggleCreate() {
    this.setState((prevState, newState) => ({
      toggle: !prevState.toggle
    }));
  }
  async editPlanet(planet) {
    const { id } = planet;
    const respData = await axios.update(
      `${BASE_URL}/planets/${id}/edit`,
      this.state.planetData
    );
    this.setState({
      planetData: {
        name: "",
        distance_from_sun: "",
        orbit_period: "",
        diameter: ""
      }
    });
  }

  async componentDidMount() {
    await this.getPlanets();
  }

  render() {
    return (
      <div className="App">
        <>
          {this.state.planetList &&
            this.state.planetList.map(planet => (
              <div>
                <p>{planet.name}</p>
                <button onClick={() => this.handleDelete(planet)}>
                  Delete Planet
                </button>
                <button onClick={() => this.editPlanet(planet)}>
                  Edit Planet
                </button>
              </div>
            ))}
        </>

        <button onClick={this.toggleCreate}>
          {this.state.toggle ? "Show Less" : "Create Planet"}
        </button>
        {this.state.toggle && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.planetData.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="distance_from_sun"
              placeholder="distance_from_sun"
              value={this.state.planetData.distance_from_sun}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="orbit_period"
              placeholder="oribit_period"
              value={this.state.planetData.orbit_period}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="diameter"
              placeholder="diameter"
              value={this.state.planetData.diameter}
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default App;
