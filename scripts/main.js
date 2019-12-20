import { getWeather } from "./weather/WeatherProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EaterySelect.js";
import { ParkSelect, parkHolderText } from "./parks/parkSelect.js";
import { getParks } from "./parks/ParkProvider.js";
import { getbizzareries } from "./bizzaries/bizzarieProvider.js"
import bizzarieSelect from "./bizzaries/bizzarieSelect.js"
import { weatherComponent } from "./weather/WeatherCard.js";
import { itPreview } from "./itPreview.js";
import Dialogs from "./Dialogs.js";
import { getDirections } from "./directions/DirectionProvider.js";
import { DirectionComponent } from "./directions/DirectionComponent.js";
import { saveItComponent } from "./savedItenerary/saved.js";






ParkSelect()
getbizzareries().then(bizzarieSelect).then(
    getEateries).then(eaterySelect).then(
        saveItComponent
    )
    
    

// parkHolderText()

// getParks().then(
//     () => {
        
//     }
//     ).then().then().then()
    itPreview()
Dialogs()
weatherComponent()

DirectionComponent()