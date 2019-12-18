
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
    getWeather(lat, long, apiKey).then((weather) => {
      weather = useWeather()
      render(weather)
  })
})

function FahrenheitConverter(valNum) {
  valNum = 9 / 5 * (valNum - 273) + 32
  return valNum
}
{/* <div>${new Date(dateOne).toLocaleDateString('en-US')}</div> */}
  //Need data from 6, 14, 22, 30, 38
  
  const render = (weatherData) => {

    const [dateOne, timeOne] = weatherData[6].dt_txt.split(" ")
    const [dateTwo, timeTwo] = weatherData[14].dt_txt.split(" ")
    const [dateTree, timeTree] = weatherData[22].dt_txt.split(" ")
    const [dateFour, timeFour] = weatherData[30].dt_txt.split(" ")
    const [dateFive, timeFive] = weatherData[38].dt_txt.split(" ")

    contentTarget.innerHTML = `
      <h3>5-Day Weather Forecast</h3>
      <div class="weatherBlock">
        <div class="weatherCard">
          <h2>${new Date(dateOne).toLocaleDateString('en-US')}</h2>
          <p>Description: ${weatherData[6].weather[0].main}</p>
          <p>Temperature: ${Math.floor(FahrenheitConverter(weatherData[6].main.temp))} F</p>
          <p>Humidity: ${weatherData[6].main.humidity}</p>
          <p>Wind Speed: ${weatherData[6].wind.speed} mph</p>
        </div>
        <div class="weatherCard">
          <h2>${new Date(dateTwo).toLocaleDateString('en-US')}</h2>
          <p>Description: ${weatherData[14].weather[0].main}</p>
          <p>Temperature: ${Math.floor(FahrenheitConverter(weatherData[14].main.temp))} F</p>
          <p>Humidity: ${weatherData[14].main.humidity}</p>
          <p>Wind: ${weatherData[14].wind.speed} mph</p>
        </div>
        <div class="weatherCard">
          <h2>${new Date(dateTree).toLocaleDateString('en-US')}</h2>
          <p>Description: ${weatherData[22].weather[0].main}</p>
          <p>Temperature: ${Math.floor(FahrenheitConverter(weatherData[22].main.temp))} F</p>
          <p>Humidity: ${weatherData[22].main.humidity}</p>
          <p>Wind: ${weatherData[22].wind.speed} mph</p>
        </div>
        <div class="weatherCard">
          <h2>${new Date(dateFour).toLocaleDateString('en-US')}</h2>
          <p>Description: ${weatherData[30].weather[0].main}</p>
          <p>Temperature: ${Math.floor(FahrenheitConverter(weatherData[30].main.temp))} F</p>
          <p>Humidity: ${weatherData[30].main.humidity}</p>
          <p>Wind: ${weatherData[30].wind.speed} mph</p>
        </div>
        <div class="weatherCard">
          <h2>${new Date(dateFive).toLocaleDateString('en-US')}</h2>
          <p>Description: ${weatherData[38].weather[0].main}</p>
          <p>Temperature: ${Math.floor(FahrenheitConverter(weatherData[38].main.temp))} F</p>
          <p>Humidity: ${weatherData[38].main.humidity}</p>
          <p>Wind: ${weatherData[38].wind.speed} mph</p>
        </div>
      </div>
      `
  }


}