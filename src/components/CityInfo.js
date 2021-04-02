import React from "react";
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
        <div className="parameters">
          <p>
            <AiOutlineCalendar />
            {date}
          </p>
          <p>
            <FaTemperatureHigh />
            {Math.round(cityInfo.main.temp)}
          </p>
          <p>
            <FiSunrise />
            {sunriseTime}
          </p>
          <p>
            <FiSunset />
            {sunsetTime}
          </p>
        </div>
      </main>
    );
  } else {
    return null;
  }
};

export default CityInfo;
