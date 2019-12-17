import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateries")

const eaterySelect = () => {
    const eateries = useEateries()
    console.table(eateries)
    eventHub.addEventListener(
        "change",
        changeEvent => {
            if (changeEvent.target.id === "eaterySelect") {
                eventHub.dispatchEvent(new CustomEvent("eaterySelected", {
                    detail: {
                        eateryName: changeEvent.target.value
                    }
                }))
            }
        }
    )

    const render = eateryCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="eaterySelect">
                <option value="0">Select an Eatery</option>
                ${eateryCollection.map(eatery => {
            return `<option value="${eatery.businessName}">${eatery.businessName}</option>`
        })}
            </select>
        `
    }
    
    render(eateries)
}

export default eaterySelect