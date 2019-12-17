import { useBizzarie } from "./bizzarieProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".bizarre")

const bizzarieSelect = () => {
    const bizzarie = useBizzarie()
<<<<<<< HEAD
// console.table(bizzarie)
=======

>>>>>>> master


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
<<<<<<< HEAD
            <select class="dropdown" id="bizzarieSelect">
                <option value="0">Select a Bizzarie</option>
=======
            <select class="bizarrieDropdown" id="bizzarieSelect">
                <option value="0">Please select an Bizzarie...</option>
>>>>>>> master
                ${bizzarieCollection.map(currentBizzarie => {
                return `<option value="${currentBizzarie.name}">${currentBizzarie.name}</option>`
            })}
            </select>
        `
    }

    render(bizzarie)
}

export default bizzarieSelect