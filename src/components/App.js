import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";
import Header from "./Header";
import CityPick from "./CityPick";

class App extends Component {
  state = {
    cityName: "",
    weather: [],
  };

  setCityName = (cityName) => {
    this.setState({
      cityName: cityName,
    });
  };

  getWeatherParameters = () => {
    const { cityName } = this.state;
    const apiKey = "c4c8854fb0426dd04df7f7f0d3bab41c";
    if (cityName) {
      const API = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw Error(response.status);
        })
        .then((data) => {
          this.setState({
            weather: data,
          });
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    console.log(this.state.weather);
    return (
      <div className="wrap">
        <Header />
        <CityPick setCityName={this.setCityName} />
      </div>
    );
  }
}

export default App;
