import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.sass";
import Header from "./Header";
import CityPick from "./CityPick";
import CityInfo from "./CityInfo";

class App extends Component {
  state = {
    weather: [],
    date: "",
  };

  getWeatherParameters = (cityName) => {
    const apiKey = "c4c8854fb0426dd04df7f7f0d3bab41c";
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric
    `;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const date = new Date().toLocaleString();
        console.log(data);
        this.setState({
          weather: data,
          date,
        });
      })
      .catch((error) => {
        alert("Enter correct City Name");
        console.log(console.log(error));
      });
  };

  render() {
    console.log(this.state.weather);
    console.log(this.state.date);
    return (
      <div className="wrap">
        <Header />
        <CityPick
          setCityName={this.setCityName}
          getWeatherParameters={this.getWeatherParameters}
        />
        <CityInfo cityInfo={this.state.weather} date={this.state.date} />
      </div>
    );
  }
}

export default App;
