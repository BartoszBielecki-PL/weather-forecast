import React, { Component } from "react";
import "./CityPick.sass";

class CityPick extends Component {
  state = {
    cityName: "",
  };

  handleChange = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  handleClick = () => {
    const { cityName } = this.state;
    if (cityName) {
      this.props.getWeatherParameters(cityName);
      this.setState({
        cityName: "",
      });
    } else {
      alert("Enter City Name!");
    }
  };

  render() {
    const { cityName } = this.state;
    return (
      <section className="city">
        <h3>Enter City Name</h3>
        <input type="text" value={cityName} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.handleClick}>
          Check The Air
        </button>
      </section>
    );
  }
}

export default CityPick;
