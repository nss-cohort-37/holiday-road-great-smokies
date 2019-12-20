import { useParks } from "./parks/ParkProvider.js";
import {
  saveIteneraries,
  getIteneraries,
  useIteneraries
} from "./itineraryProvider.js";

const eventHub = document.querySelector(".container");
const parkContent = document.querySelector(".parkPreview");
const weatherContent = document.querySelector(".weather");
const attractionContent = document.querySelector(".attractionPreview");
const eateryContent = document.querySelector(".eateryPreview");
const contentTarget = document.querySelector(".savedIt");

export const itPreview = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button--save") {
      const newIt = {
        park: document.querySelector("#currentParkName").textContent,
        bizzarie: document.querySelector("#currentAttractionName").textContent,
        eatery: document.querySelector("#currentEateryName").textContent,
        longLat: document.querySelector("#currentParkName").classList,
        parkCode: document.querySelector("#currentParkCode").classList
      };

      saveIteneraries(newIt)
        .then(getIteneraries)
        .then(() => {
          const Itenerary = useIteneraries();
          render(Itenerary);
          console.log(Itenerary);
        });
    }
  });

  const render = Itenerary => {
    contentTarget.innerHTML = Itenerary.map(ite => {
      return `
      <section class="savedItCard">
          <article class="park__field">
              <h2>${ite.park}</h2>
          </article>
          <article class="bizzarie__field">
              Bizzarie: ${ite.bizzarie}
          </article>
          <br/>
          <article class="eatery__field">
              Eatery: ${ite.eatery}
          </article>
          <br/>
          <button class="button--directions" id="${ite.longLat[0]} ${ite.longLat[1]}">Get Directions</button>
      </section>
          `;
    }).join("");
  };

  eventHub.addEventListener("parkSelected", event => {
    const currentParkName = event.detail.park;
    const currentParkDescription = event.detail.description;
    const currentParkLongLat = event.detail.coordinates;
    const currentParkCode = event.detail.parkCode
    console.log(currentParkName);
    parkContent.innerHTML = `
    <h2 id="currentParkName" class="${currentParkLongLat} value="${currentParkName}">${currentParkName}</h2>
    <span id="currentParkCode" class="${currentParkCode}"></span>
    <button id="dialog--${event.detail.id}" class="parkButton">Details</button>
    <dialog id="dialog--${event.detail.id}" class="park--description">
    <div>
    <h4>Description: </h4>
    <p>${currentParkDescription}</p>
    <h4>Hiking Difficulty: </h4>
    <p>
    ${event.detail.difficultyRating}    
    </p>
    </div>
    <button class ="button--close" id="closeDialog">Close</button>
    </dialog>
    
    
    `;
  });

  eventHub.addEventListener("bizzarieSelected", event => {
    const currentAttractionName = event.detail.bizzarieName;
    console.log(currentAttractionName);
    attractionContent.innerHTML = `
    <h2 id="currentAttractionName" value="${currentAttractionName}">${currentAttractionName}</h2>
    <button class="attractionButton" id="dialog--${event.detail.id}">Details</button>
    <dialog id="dialog--${event.detail.id}">
    <div>${event.detail.bizzarieName} </div>
    <br>
    <div>Description: ${event.detail.description}</div>
    <br>
    <div>Location: ${event.detail.city}, ${event.detail.state} </div>
    <br>
    <div>Restroom: ${event.detail.restrooms} </div>
    <br>
    <button class="button--close">Close </button>

    </dialog>
    `;
  });

  eventHub.addEventListener("eaterySelected", event => {
    const currentEateryName = event.detail.eateryName;
    console.log(event.detail.wifi);
    eateryContent.innerHTML = `
    <h2 id="currentEateryName">${currentEateryName}</h2>
    <button class="eateryButton" id="dialog--${event.detail.id}">Details</button>
      <dialog class="dialog--${event.detail.id}">
        <div>Description: ${event.detail.description}</div>
        <br>
        <div>Restrooms: ${event.detail.restrooms}</div>
        <br>
        <div>Wifi: ${event.detail.wifi}</div>
        <br>
        <div>Location: ${event.detail.city}, ${event.detail.state}</div>

        <button class="button--close">Close Dialog</button>
      </dialog>  
      <button class="button--save" id="button--save">Save Itinerary </button>

    
    
    `;
  });

  // eventHub.addEventListener("weatherParkSelected", event => {
  //   const
  // })
};