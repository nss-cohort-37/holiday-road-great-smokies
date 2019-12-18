import { useParks } from "./parks/ParkProvider.js"

const eventHub = document.querySelector(".container")
const parkContent = document.querySelector(".parkPreview")
const weatherContent = document.querySelector(".weather")
const attractionContent = document.querySelector(".attractionPreview")
const eateryContent = document.querySelector(".eateryPreview")


export const itPreview = () => {

  eventHub.addEventListener("parkSelected", event => {
    const currentParkName = event.detail.park
    console.log(currentParkName)
    parkContent.innerHTML = `
    <p>${currentParkName}</p>
    <button class="parkButton">Details</button>

    
    `
  })


  eventHub.addEventListener("bizzarieSelected", event => {
    const currentAttractionName = event.detail.bizzarieName
    console.log(currentAttractionName)
    attractionContent.innerHTML = `
    <p>${currentAttractionName}</p>
    <button class="attractionButton">Details</button>
    
    `
  })

  eventHub.addEventListener("eaterySelected", event => {
    const currentEateryName = event.detail.eateryName
    console.log(event.detail.wifi)
    eateryContent.innerHTML = `
    <p>${currentEateryName}</p>
    <button class="eateryButton" id="dialog--">Details</button>
      <dialog id="dialog--${event.detail.id}">
        <div>Discription:${event.detail.description}</div>
        <div>restrooms:${event.detail.restrooms}</div>
        <div>wifi:${event.detail.wifi}</div>
        <div>location:${event.detail.city}, ${event.detail.state}</div>

        <button class="button--close">Close Dialog</button>
      </dialog>  
    
    
    `

  })

  // eventHub.addEventListener("weatherParkSelected", event => {
  //   const 
  // })



}