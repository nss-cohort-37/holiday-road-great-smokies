import { getbizzareries } from "./bizzaries/bizzarieProvider.js"
import bizzarieSelect from "./bizzaries/bizzarieSelect.js"

import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EaterySelect.js";

getbizzareries().then(bizzarieSelect)

getEateries().then(
    () => {
        eaterySelect()
    }
)
