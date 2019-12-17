import { getWeather } from "./weather/WeatherProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EaterySelect.js";


getWeather()
getEateries().then(
    () => {
        eaterySelect()
    }
)
