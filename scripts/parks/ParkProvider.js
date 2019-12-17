let parks = []

export const useParks = () => {
  return parks
}

export const getParks = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?api_key=ItBi4BedF5ncQIhvUV3Vl2hmtSog38gnGaeVxMT2&fields=addresses", {
    method: "GET"
  })

  .then(response => response.json())
  .then(parsedParks => {
    parks = parsedParks.data.slice()
  })
}