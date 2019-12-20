let directions = []

export const getDirections = (lat, long, apiKey) =>{
  return fetch(`https://graphhopper.com/api/1/route?point=36.128104,-86.725346&point=${lat},${long}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${apiKey}`)
  .then(res => res.json())
  .then(parsedDirections => {directions = parsedDirections.paths.slice()
    console.log(directions)
  })
}

export const useDirections = () => {
  return directions
}