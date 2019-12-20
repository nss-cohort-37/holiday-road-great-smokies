// export const EventComponent = () => {
//   const eventHub = document.querySelector(".container");
//   const contentTarget = document.querySelector(".directions");

//   //Add click event to 'Get Directions' button to store the directions (currently inside of the element's ID), and plug them into directions API
//   eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.classList.contains("button--directions")) {
//     //   const currentLatLong = clickEvent.target.id
//     //   const [latitude, longitude] = currentLatLong.split(", ")
//     //   const [latprefix, lat] = latitude.split("lat:")
//     //   const [longprefix, long] = longitude.split("long:")
//     //   const apiKey = "a0ed91a5-fa4e-4319-b538-98021a37c6fb"
//       getDirections(lat, long, apiKey).then((directions) => {
//         directions = useDirections()
//         render(directions)
//       })
//     }
//   })

//   //Render the events to the DOM
//   const render = eventsData => {

//     <dialog id="dialog--${event.detail.id}" class="park--description">
//     <div>
//     <h4>Description: </h4>
//     ${currentParkDescription}</div>
//     <button class ="button--close" id="closeDialog">Close</button>
//     </dialog>

//     contentTarget.innerHTML = `
//         <h2>Directions</h2>
//         <p>Total Distance: ${Math.floor(MilesConverter(directionsData[0].distance))} miles</p>
//         <p>Total Time: ${HourConverter(directionsData[0].time)}</p>
//         <p>Instructions: </p>
//         <ul>${directionsData[0].instructions.map(inst => {
//             return `<li>${inst.text} for ${Math.round(MilesConverter(inst.distance) * 10 ) / 10 } mile(s)</li>`
//         }).join("")}
//         </ul>`;
//   }

// }