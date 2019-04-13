import React, { Component } from "react";
import {
  fetchPlanets,
  updatePlanet,
  deletePlanet,
  createPlanet
} from "./services/planets";
import "./App.css";
import PlanetForm from "./components/PlanetForm";
import { Link, Route, withRouter } from "react-router-dom";
import PlanetList from "./components/PlanetList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: "",
      toggle: false,
      toggleEdit: false,
      planetData: {
        id: "",
        name: "",
        distance_from_sun: "",
        orbit_period: "",
        diameter: ""
      },
      editPlanetData: {
        id: "",
        name: "",
        distance_from_sun: "",
        orbit_period: "",
        diameter: ""
      }
    };
    this.getPlanets = this.getPlanets.bind(this);
    this.handlePlanetChange = this.handlePlanetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.editPlanet = this.editPlanet.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  async getPlanets() {
    const planetList = await fetchPlanets();
    console.log("this is getPlanets : resp", planetList.data);
    this.setState((prevState, newState) => ({
      planetList: planetList.data
    }));
  }
  async handleSubmit(e) {
    e.preventDefault();
    const respData = await createPlanet(this.state.planetData);
    this.setState((prevState, newState) => ({
      planetList: [...prevState.planetList, respData.data],
      planetData: {
        name: "",
        distance_from_sun: "",
        orbit_period: "",
        diameter: ""
      }
    }));
    this.props.history.push(`/`);
  }
  async handleEditSubmit(e) {
    e.preventDefault();
    const respData = await updatePlanet(
      this.state.editPlanetData.id,
      this.state.editPlanetData
    );
    this.getPlanets();
    this.props.history.push(`/`);
  }
  async handlePlanetChange(e) {
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
  async handleEditChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("handleEditChange name, val", name, value);
    console.log("handleEditChange name, val", this.state.editPlanetData);

    await this.setState(prevState => ({
      editPlanetData: {
        ...prevState.editPlanetData,
        [name]: value
      }
    }));
  }
  async handleDelete(planet) {
    const { id } = planet;
    console.log(`Deleting planet with an id of ${id}`);
    await deletePlanet(id);
    this.setState(prevState => ({
      planetList: prevState.planetList.filter(planet => planet.id !== id)
    }));
  }

  toggleCreate() {
    this.setState((prevState, newState) => ({
      toggle: !prevState.toggle
    }));
  }
  async editPlanet(planet) {
    this.setState({
      toggle: true,
      editPlanetData: {
        id: planet.id,
        name: planet.name,
        distance_from_sun: planet.distance_from_sun,
        orbit_period: planet.orbit_period,
        diameter: planet.diameter
      }
    });
    this.props.history.push(`/planets/${planet.id}`);
  }

  async componentDidMount() {
    await this.getPlanets();
  }

  render() {
    return (
      <div className="App">
        <h1>Planet's Ap</h1>
        <Route
          exact
          path="/"
          render={props => (
            <>
              <PlanetForm
                toggle={this.state.toggle}
                name={this.state.planetData.name}
                orbit_period={this.state.planetData.orbit_period}
                distance_from_the_sun={
                  this.state.planetData.distance_from_the_sun
                }
                diameter={this.state.planetData.diameter}
                handleChange={this.handlePlanetChange}
                handleSubmit={this.handleSubmit}
              />
              <PlanetList
                {...props}
                toggle={this.state.toggle}
                planetList={this.state.planetList}
                handleDelete={this.handleDelete}
                editPlanet={this.editPlanet}
                toggleCreate={this.toggleCreate}
              />
            </>
          )}
        />
        <Route
          exact
          path="/planets/:id"
          render={props => (
            <>
              <PlanetForm
                {...props}
                toggle="true"
                name={this.state.editPlanetData.name}
                orbit_period={this.state.editPlanetData.orbit_period}
                distance_from_the_sun={
                  this.state.editPlanetData.distance_from_the_sun
                }
                diameter={this.state.editPlanetData.diameter}
                handleChange={this.handleEditChange}
                handleSubmit={this.handleEditSubmit}
              />
            </>
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
