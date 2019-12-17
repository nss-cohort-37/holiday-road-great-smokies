import ParkSelect from "./parks/parkSelect.js";
import { getParks, useParks } from "./parks/ParkProvider.js";



useParks()



getParks().then(() => ParkSelect())
