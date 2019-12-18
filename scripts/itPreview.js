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
    <dialog id="dialog--">
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
    console.log(currentEateryName)
    eateryContent.innerHTML = `
    <p>${currentEateryName}</p>
    <button class="eateryButton">Details</button>
    
    
    `

  })

  // eventHub.addEventListener("weatherParkSelected", event => {
  //   const 
  // })



}