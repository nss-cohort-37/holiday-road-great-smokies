import { getWeather } from "./weather/WeatherProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EaterySelect.js";
import { ParkSelect, parkHolderText } from "./parks/parkSelect.js";
import { getParks } from "./parks/ParkProvider.js";
import { getbizzareries } from "./bizzaries/bizzarieProvider.js"
import bizzarieSelect from "./bizzaries/bizzarieSelect.js"
import { weatherComponent } from "./weather/WeatherCard.js";








parkHolderText()

getParks().then(
    () => {
        ParkSelect()
    }
    ).then(weatherComponent)

getbizzareries().then(bizzarieSelect)

getEateries().then(
    () => {
        eaterySelect()
    }
)
