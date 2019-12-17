import { useBizzarie } from "./bizzarieProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".bizarre")

const bizzarieSelect = () => {
    const bizzarie = useBizzarie()
// console.table(bizzarie)


    eventHub.addEventListener(
        "change",
        changeEvent => {
            if (changeEvent.target.id === "bizzarieSelect") {
                eventHub.dispatchEvent(new CustomEvent("bizzarieSelected", {
                    detail: {
                        bizzarieName: changeEvent.target.value
                    }
                }))
            }
        }
    )

    const render = bizzarieCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="bizzarieSelect">
                <option value="0">Select a Bizzarie</option>
                ${bizzarieCollection.map(currentBizzarie => {
                return `<option value="${currentBizzarie.name}">${currentBizzarie.name}</option>`
            })}
            </select>
        `
    }

    render(bizzarie)
}

export default bizzarieSelect