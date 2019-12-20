let parks = [
  {
    fullName:"A place",
    description: "blah1",
    latLong:"lat:38.916554, long:-77.025977",
    addresses: [
      {
        postalCode:"15243",
      }
    ]
  },
  {
    fullName:"Tightwad, Missouri",
    description: "lol wat",
    latLong:"lat:38.3095, long:-93.5466",
    addresses: [
      {
        postalCode:"64735",
      }
    ]
  },
  {
    fullName:"a third place",
    description: "blah3",
    latLong:"lat:25.97079602, long:-81.08120629",
    addresses: [
      {
        postalCode:"32345",
      }
    ]
  },
]

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