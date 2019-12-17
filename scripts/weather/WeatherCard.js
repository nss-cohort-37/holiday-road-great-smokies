
import { useParks } from "./parks/ParksProvider.js"
import { getWeather } from "./WeatherProvider.js"
const eventHub = document.querySelector(".container")
const parks = useParks()

eventHub.addEventListener("weatherParkSelected", event =>{
const currentLatLong = event.detail.latLong
const [latitude, longitude] = currentLatLong.split(", ")
const [latprefix, lat] = latitude.split("lat:")
const [longprefix, long] = longitude.split("lon:")

getWeather("2aa5986f620fa1dd066ffd051d2a7173")
})
const contentTarget = document.querySelector(".whatevertheclassis")

contentTarget.innerHTML = `

`
