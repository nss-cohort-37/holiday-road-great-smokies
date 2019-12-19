import { useParks } from "./parks/ParkProvider.js"
import { saveIteneraries } from "./itineraryProvider.js"



const eventHub = document.querySelector(".container")
const parkContent = document.querySelector(".parkPreview")
const weatherContent = document.querySelector(".weather")
const attractionContent = document.querySelector(".attractionPreview")
const eateryContent = document.querySelector(".eateryPreview")
const contentTarget = document.querySelector(".savedIt")


export const itPreview = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button--save") {

        const newIt = {
            park: document.querySelector("#currentParkName").textContent,
            bizzarie: document.querySelector("#currentAttractionName").textContent,
            eatery: document.querySelector("#currentEateryName").textContent,
        }

        saveIteneraries(newIt).then(render)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        
            <div class="park__field">
                park: <p></p>
            </div>
            <div class="bizzarie__field">
                bizzarie: <p></p>
            </div>
            <div class="eatery__field">
                eatery: <p></p>
            </div>
        
    `
}


  eventHub.addEventListener("parkSelected", event => {
    const currentParkName = event.detail.park 
    const currentParkDescription = event.detail.description
    console.log(currentParkName)
    parkContent.innerHTML = `
    <p id="currentParkName" value="${currentParkName}">${currentParkName}</p>
    <button id="dialog--${event.detail.id}" class="parkButton">Details</button>
    <dialog id="dialog--${event.detail.id}" class="park--description">
    <div>
    <h4>Description: </h4>
    ${currentParkDescription}</div>
    <button class ="button--close" id="closeDialog">Close</button>
    </dialog>
    
    
    `
  })


  eventHub.addEventListener("bizzarieSelected", event => {
    const currentAttractionName = event.detail.bizzarieName
    console.log(currentAttractionName)
    attractionContent.innerHTML = `
    <p id="currentAttractionName" value="${currentAttractionName}">${currentAttractionName}</p>
    <button class="attractionButton" id="dialog--${event.detail.id}">Details</button>
    <dialog id="dialog--${event.detail.id}">
    <div>${event.detail.bizzarieName} </div>
    <div>Description: ${event.detail.description}</div>
    <div>Location: ${event.detail.city}, ${event.detail.state} </div>
    <div>Restroom: ${event.detail.restrooms} </div>
    <button class="button--close">Close </button>

    </dialog>
    `
  })

  eventHub.addEventListener("eaterySelected", event => {
    const currentEateryName = event.detail.eateryName
    console.log(event.detail.wifi)
    eateryContent.innerHTML = `
    <p id="currentEateryName">${currentEateryName}</p>
    <button class="eateryButton" id="dialog--${event.detail.id}">Details</button>
      <dialog class="dialog--${event.detail.id}">
        <div>Description:${event.detail.description}</div>
        <div>restrooms:${event.detail.restrooms}</div>
        <div>wifi:${event.detail.wifi}</div>
        <div>location:${event.detail.city}, ${event.detail.state}</div>

        <button class="button--close">Close Dialog</button>
      </dialog>  
      <button class="button--save" id="button--save">Save Itenerary </button>

    
    
    `

  })



  // eventHub.addEventListener("weatherParkSelected", event => {
  //   const 
  // })



}