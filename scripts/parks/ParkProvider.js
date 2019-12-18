let parks = []

export const useParks = () => {
  return parks
}

export const getParks = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?api_key=B6p6w5cQnRqd8DPf6tfecbC2X5LbqHX8o9WlBafF&fields=addresses", {
    method: "GET"
  })

  .then(response => response.json())
  .then(parsedParks => {
    parks = parsedParks.data.slice()
  })
}