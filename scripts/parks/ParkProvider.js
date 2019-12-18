let parks = []

export const useParks = () => {
  return parks
}

export const getParks = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?api_key=AKIaxzlTDjKSD11PHylBcdrohl9zrbV1chzy3x9s&fields=addresses", {
    method: "GET"
  })

  .then(response => response.json())
  .then(parsedParks => {
    parks = parsedParks.data.slice()
  })
}