import { useDirections, getDirections } from "./DirectionProvider.js";

export const DirectionComponent = () => {
  const eventHub = document.querySelector(".container");
  const contentTarget = document.querySelector(".directions");

  eventHub.addEventListener("weatherParkSelected", event => {
    const currentLatLong = event.detail.park
    const [latitude, longitude] = currentLatLong.split(", ")
    const [latprefix, lat] = latitude.split("lat:")
    const [longprefix, long] = longitude.split("long:")
    const apiKey = "a0ed91a5-fa4e-4319-b538-98021a37c6fb"
    getDirections(lat, long, apiKey).then((directions) => {
      directions = useDirections()
      render(directions)
  })
})

  const render = directionsData => {

    const directionArray = [];

    directionsData.map(point => {
      for (let i = 0; i < point.instructions.length; i++) {
        directionArray.push(point.instructions[i].text);
      }
    });

    contentTarget.innerHTML = `
        <h2>Directions</h2>
        <p>Distance: ${directionsData[0].distance}</p>
        <p>Time: ${directionsData[0].time}</p>
        <p>Instructions: </p>
        <ul>${directionsData[0].instructions.map(inst => {
            return `<li>${inst.text}</li>`
        }).join("")}
        </ul>`;
  }

}