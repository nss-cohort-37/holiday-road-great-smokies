
import { getWeather, useWeather } from "./WeatherProvider.js"



export const weatherComponent = () => {

  const eventHub = document.querySelector(".container")
  const contentTarget = document.querySelector(".weathertest")


  eventHub.addEventListener("weatherParkSelected", event => {
    const currentLatLong = event.detail.park
    const [latitude, longitude] = currentLatLong.split(", ")
    const [latprefix, lat] = latitude.split("lat:")
    const [longprefix, long] = longitude.split("long:")
    const apiKey = "2aa5986f620fa1dd066ffd051d2a7173"
    getWeather(lat, long, apiKey).then((weather) => weather = useWeather())
    render()
  })

  
  const render = (weatherData) => {
    contentTarget.innerHTML = `
      <p>Description: ${"foo"}</p>
      <p>Temperature: ${"foo"}</p>
      <p>Humidity: ${"foo"}</p>
      <p>Wind: ${"foo"}</p>
    `
  }


  render()

}