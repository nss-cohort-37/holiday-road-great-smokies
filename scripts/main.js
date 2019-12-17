import { getbizzareries } from "./bizzaries/bizzarieProvider.js"
import bizzarieSelect from "./bizzaries/bizzarieSelect.js"
getbizzareries().then(bizzarieSelect)
