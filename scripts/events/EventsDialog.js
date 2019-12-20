export const EventComponent = () => {
  const eventHub = document.querySelector(".container");
  const contentTarget = document.querySelector(".directions");

  //Write a function converting meters to miles
  const MilesConverter = (meters) => {
    let miles = meters * 0.00062137
    return miles
  }

  //Write a function converting milliseconds to hours
  const HourConverter = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + " hours, " + minutes + " minutes";
  }

  //Add click event to 'Get Directions' button to store the directions (currently inside of the element's ID), and plug them into directions API
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.classList.contains("button--directions")) {
      const currentLatLong = clickEvent.target.id
      const [latitude, longitude] = currentLatLong.split(", ")
      const [latprefix, lat] = latitude.split("lat:")
      const [longprefix, long] = longitude.split("long:")
      const apiKey = "a0ed91a5-fa4e-4319-b538-98021a37c6fb"
      getDirections(lat, long, apiKey).then((directions) => {
        directions = useDirections()
        render(directions)
      })
    }
  })

  //Render the directions to the DOM
  const render = directionsData => {

    contentTarget.innerHTML = `
        <h2>Directions</h2>
        <p>Total Distance: ${Math.floor(MilesConverter(directionsData[0].distance))} miles</p>
        <p>Total Time: ${HourConverter(directionsData[0].time)}</p>
        <p>Instructions: </p>
        <ul>${directionsData[0].instructions.map(inst => {
            return `<li>${inst.text} for ${Math.round(MilesConverter(inst.distance) * 10 ) / 10 } mile(s)</li>`
        }).join("")}
        </ul>`;
  }

}