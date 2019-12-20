import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".parks")







export const parkHolderText = () => {
  contentTarget.innerHTML=`
  <h4>Please wait, parks incoming</h4>
  `
}



export const ParkSelect = () => {
    const parks = useParks()

eventHub.addEventListener("change", changeEvent => {
  if (changeEvent.target.classList.contains("parkDropdown")) {
    const parks = useParks()
    const parkID = changeEvent.target.value
    const foundPark = parks.find(park => {
      const firstCode = park.addresses[0].postalCode
      return firstCode === parkID
    }) 

    console.log(parkID)
   
    const latlong = foundPark.latLong 

    const message = new CustomEvent("weatherParkSelected", {
      detail: {
        park: latlong,
        id: parkID
      }
    })
    eventHub.dispatchEvent(message)
  }
})

    



    eventHub.addEventListener("change", changeEvent => {
      if (changeEvent.target.classList.contains("parkDropdown")) {
        const parks = useParks()
        const parkID = changeEvent.target.value
        const foundPark = parks.find(park => {
        const firstCode = park.addresses[0].postalCode
        return firstCode === parkID
        })

        const selectedPark = foundPark.fullName
        const description = foundPark.description
        const latLong = foundPark.latLong
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const message = new CustomEvent("parkSelected", {
          detail: {
            park: selectedPark,
            description: description,
            difficultyRating: randomNumber,
            coordinates: latLong
          }
        })

        eventHub.dispatchEvent(message)
      }
    })

    

    const render = parks => {
       
        contentTarget.innerHTML = `
            <select class="parkDropdown" id="parkSelect">
                <option value="0">Please select a park...</option>
                  ${
                    parks.map(park =>
                     `<option value="${park.addresses.map(zip => {
                      return zip.postalCode
                    })[0]}">${park.fullName}</option>` )

                  }
            </select>
        `
    }

    render(parks)
}

