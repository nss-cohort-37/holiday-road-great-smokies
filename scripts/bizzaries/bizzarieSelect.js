import { useBizzarie } from "./bizzarieProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".bizarre")

const bizzarieSelect = () => {
    const bizzarie = useBizzarie()



    eventHub.addEventListener(
        "change",
        changeEvent => {
            if (changeEvent.target.id === "bizzarieSelect") {
const bizzarie = useBizzarie()
const bizzarieId = changeEvent.target.value
console.log(bizzarieId)
const foundbizzarie = bizzarie.find(bizz => {
    return bizz.id=== parseInt(bizzarieId, 10)
    console.log(bizzId)
}) 


                eventHub.dispatchEvent(new CustomEvent("bizzarieSelected", {
                    detail: {
                        bizzarieName: foundbizzarie.name,
                        description: foundbizzarie.description,
                        city: foundbizzarie.city,
                        state: foundbizzarie.state,
                        restrooms: foundbizzarie.ameneties.restrooms,
                        id: bizzarieId
                    }
                }))
            }
        }
    )

    const render = bizzarieCollection => {
        contentTarget.innerHTML = `
            <select class="bizarrieDropdown" id="bizzarieSelect">
                <option value="0">Please select an Bizzarie...</option>
                ${bizzarieCollection.map(currentBizzarie => {
                return `<option value="${currentBizzarie.id}">${currentBizzarie.name}</option>`
            })}
            </select>
        `
    }

    render(bizzarie)
}

export default bizzarieSelect