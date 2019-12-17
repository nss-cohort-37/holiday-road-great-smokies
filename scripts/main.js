import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EaterySelect.js";



getEateries().then(
    () => {
        eaterySelect()
    }
)