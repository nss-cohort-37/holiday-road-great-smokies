// https://graphhopper.com/api/1/route?point=36.1627,-86.7816&point=37,-119&vehicle=car&locale=us&instructions=true&calc_points=true&key=a0ed91a5-fa4e-4319-b538-98021a37c6fb

let directions = []


//Plug all lat & long into link

export const getDirections = (lat, long, apiKey) =>{
  return fetch(`https://graphhopper.com/api/1/route?point=36.1627,-86.7816&point=${lat},${long}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${apiKey}`)
  .then(res => res.json())
  .then(parsedDirections => {directions = parsedDirections.paths.slice()
    console.log(directions)
  })
}

// Ex. Nashville to yosemite:
// export const getDirections = () => {
//   return fetch("https://graphhopper.com/api/1/route?point=36.1627,-86.7816&point=37,-119&vehicle=car&locale=us&instructions=true&calc_points=true&key=a0ed91a5-fa4e-4319-b538-98021a37c6fb")
//   .then(res => res.json())
//   .then(parsedDirections => {directions = parsedDirections.paths.slice()
//     console.log(directions)
//   })
// }

export const useDirections = () => {
  return directions
}