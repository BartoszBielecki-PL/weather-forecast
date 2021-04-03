import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import snowflake from "../jpg/snowflake.jpg";
import dandelion from "../jpg/dandelion.jpg";
import iceCream from "../jpg/iceCream.jpg";
import "./App.sass";
import CityPick from "./CityPick";
import CityInfo from "./CityInfo";

class App extends Component {
  state = {
    weather: [],
    date: "",
    backgroundImg: "",
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
        const backgroundImg = "";
        const temperature = data.main.temp;
        if (temperature < 5) {
          this.backgroundImg = `url(${snowflake})`;
        } else if (temperature >= 5 && temperature < 20) {
          this.backgroundImg = `url(${dandelion})`;
        } else {
          this.backgroundImg = `url(${iceCream})`;
        }
        console.log(backgroundImg);
        this.setState({
          weather: data,
          date,
          backgroundImg,
        });
      })
      .catch((error) => {
        alert("Enter correct City Name");
        console.log(console.log(error));
      });
  };

  backgroundStyle = {
    backgroundImage: this.state.backgroundImg,
  };

  render() {
    console.log(this.state.backgroundImg);
    return (
      <div className="wrap" style={this.backgroundStyle}>
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
