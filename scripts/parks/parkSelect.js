import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters__park")




eventHub.addEventListener("change", changeEvent => {
  if (changeEvent.target.classList.contains("dropdown")) {
    const parks = useParks()
    const parkID = changeEvent.target.id
    const foundPark = parks.find(park => {
      return park.parkID === parkID
    }) 

    const latlong = foundPark.latLong 



    const message = new customEvent("weatherParkSelected", {
      detail: {
        park: latlong
      }
    })
    eventHub.dispatchEvent(message)
  }
})






export const ParkSelect = () => {
    const parks = useParks()


    

    eventHub.addEventListener("change", changeEvent => {
      if (changeEvent.target.classList.contains("dropdown")) {
        const selectedPark = changeEvent.target.value

        const message = new CustomEvent("parkSelected", {
          detail: {
            park: selectedPark
          }
        })

        eventHub.dispatchEvent(message)
      }
    })

    

    const render = parks => {
       
        contentTarget.innerHTML = `
            <select class="dropdown" id="parkSelect">
                <option value="0">Please select a park...</option>
                  ${
                    parks.map(park =>
                     `<option value="${park.fullName.split(" ").join("")}">${park.fullName}</option>` )

                  }
            </select>
        `
    }

    render(parks)
}

export default ParkSelect