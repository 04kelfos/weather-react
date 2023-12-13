import React from "react";
import "./weather.css";

export default function weather() {
  let weatherData = {
    city: "St Ives",
    temperature: 21,
    date: "Monday 9 October",
    description: "Sunny",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 69,
    wind: 4,
  };
  return (
    <div className="Weather-wrapper">
      <div className="Weather">
        <form class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                class="form-control"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input type="submit" value="Search" class="btn btn-primary" />
            </div>
          </div>
        </form>
        <div class="row">
          <h1>{weatherData.city}</h1>
          <div class="col-6">
            <ul>
              <li>Last updated: {weatherData.date}</li>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}mph</li>
            </ul>
          </div>

          <div class="col-3">
            <img src={weatherData.imgUrl} alt="cloudy" id="icon" />
          </div>
          <div class="col-3 temperature">
            {weatherData.temperature}
            <small>
              <a href="#">ºC</a>|<a href="#">ºF</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
