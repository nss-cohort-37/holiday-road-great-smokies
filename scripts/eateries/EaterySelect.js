import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateries")

const eaterySelect = () => {
    const eateries = useEateries()
    eventHub.addEventListener(
        "change",
        changeEvent => {
            if (changeEvent.target.id === "eaterySelect") {

                const eateries = useEateries()
                const eateryId = changeEvent.target.value
                const foundeatery = eateries.find(
                    eat => {
                        return eat.id === parseInt(eateryId, 10)
                    }
                )



                const name = foundeatery.businessName
                console.log(name)

                eventHub.dispatchEvent(new CustomEvent("eaterySelected", {
                    detail: {
                        eateryName: name,
                        description: foundeatery.description,
                        city: foundeatery.city,
                        state: foundeatery.state,
                        wifi: foundeatery.ameneties.wifi,
                        restroom: foundeatery.ameneties.restrooms,
                        id: eateryId
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
            return `<option value="${eatery.id}">${eatery.businessName}</option>`
        })}
            </select>
        `
    }

    render(eateries)
}

export default eaterySelect