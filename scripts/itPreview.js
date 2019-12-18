import { useParks } from "./parks/ParkProvider.js"



const eventHub = document.querySelector(".container")
const parkContent = document.querySelector(".parkPreview")
const weatherContent = document.querySelector(".weather")
const attractionContent = document.querySelector(".attractionPreview")
const eateryContent = document.querySelector(".eateryPreview")


export const itPreview = () => {

  eventHub.addEventListener("parkSelected", event => {
    const currentParkName = event.detail.park 
    const currentParkDescription = event.detail.description
    console.log(currentParkName)
    parkContent.innerHTML = `
    <p>${currentParkName}</p>
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
    <p>${currentAttractionName}</p>
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
    <p>${currentEateryName}</p>
    <button class="eateryButton" id="dialog--${event.detail.id}">Details</button>
      <dialog class="dialog--${event.detail.id}">
        <div>Description:${event.detail.description}</div>
        <div>restrooms:${event.detail.restrooms}</div>
        <div>wifi:${event.detail.wifi}</div>
        <div>location:${event.detail.city}, ${event.detail.state}</div>

        <button class="button--close">Close Dialog</button>
      </dialog>  
      <button class="button--save disabled">Save Itenerary </button>

    
    
    `

  })



  // eventHub.addEventListener("weatherParkSelected", event => {
  //   const 
  // })



}