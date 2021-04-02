import React from "react";
import "./CityInfo.sass";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiSunset, FiSunrise } from "react-icons/fi";

const CityInfo = (props) => {
  const { cityInfo, date } = props;

  if (cityInfo.name) {
    const sunriseTime = new Date(
      cityInfo.sys.sunrise * 1000
    ).toLocaleTimeString();

    const sunsetTime = new Date(
      cityInfo.sys.sunset * 1000
    ).toLocaleTimeString();

    return (
      <main>
        <h2>{cityInfo.name}</h2>
        <section className="parameters">
          <div>
            <p className="icon">
              <AiOutlineCalendar />
            </p>
            {date}
          </div>
          <div>
            <p className="icon">
              <FaTemperatureHigh />
            </p>
            {Math.round(cityInfo.main.temp)}
          </div>
          <div>
            <p className="icon">
              <FiSunrise />
            </p>
            {sunriseTime}
          </div>
          <div>
            <p className="icon">
              <FiSunset />
            </p>
            {sunsetTime}
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
};

export default CityInfo;
