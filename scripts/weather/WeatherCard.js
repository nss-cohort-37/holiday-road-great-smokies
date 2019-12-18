
import { getWeather, useWeather } from "./WeatherProvider.js"



export const weatherComponent = () => {

  const eventHub = document.querySelector(".container")
  const contentTarget = document.querySelector(".weathertest")


  eventHub.addEventListener("weatherParkSelected", event => {
    debugger
    const currentLatLong = event.detail.park
    const [latitude, longitude] = currentLatLong.split(", ")
    const [latprefix, lat] = latitude.split("lat:")
    const [longprefix, long] = longitude.split("long:")
    const apiKey = "2aa5986f620fa1dd066ffd051d2a7173"
    getWeather(lat, long, apiKey).then((weather) => {
      weather = useWeather()
      render(weather)
  })
})

  //Need data from 6, 14, 22, 30, 38
  
  const render = (weatherData) => {
    contentTarget.innerHTML = `
      <h3>5-Day Weather Forecast</h3>
      <h2>Date1</h2>
      <p>Description: ${weatherData}</p>
      <p>Temperature: ${weatherData}</p>
      <p>Humidity: ${weatherData}</p>
      <p>Wind: ${weatherData}</p>

      <h2>Date2</h2>
      <p>Description: ${weatherData}</p>
      <p>Temperature: ${weatherData}</p>
      <p>Humidity: ${weatherData}</p>
      <p>Wind: ${weatherData}</p>

      <h2>Date3</h2>
      <p>Description: ${weatherData}</p>
      <p>Temperature: ${weatherData}</p>
      <p>Humidity: ${weatherData}</p>
      <p>Wind: ${weatherData}</p>

      <h2>Date4</h2>
      <p>Description: ${weatherData}</p>
      <p>Temperature: ${weatherData}</p>
      <p>Humidity: ${weatherData}</p>
      <p>Wind: ${weatherData}</p>

      <h2>Date5</h2>
      <p>Description: ${weatherData}</p>
      <p>Temperature: ${weatherData}</p>
      <p>Humidity: ${weatherData}</p>
      <p>Wind: ${weatherData}</p>
      `
  }


  render()

}