import { ParkSelect, parkHolderText } from "./parks/parkSelect.js";
import { getParks } from "./parks/ParkProvider.js";
import { getbizzareries } from "./bizzaries/bizzarieProvider.js"
import { getEateries } from "./eateries/EateryProvider.js";
import bizzarieSelect from "./bizzaries/bizzarieSelect.js"
import eaterySelect from "./eateries/EaterySelect.js";





parkHolderText()

getParks().then(() => ParkSelect())

getbizzareries().then(bizzarieSelect)

getEateries().then(eaterySelect)
