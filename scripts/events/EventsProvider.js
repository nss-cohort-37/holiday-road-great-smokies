let events = []

// export const getEvents = (parkCode, apiKey) =>{
//   return fetch(`https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&limit=2&api_key=${apiKey}`)
//   .then(res => res.json())
//   .then(parsedEvents => {events = parsedEvents.slice()
//     console.log(events)
//   })
// }

export const getEvents = (parkCode, apiKey) =>{
    return fetch(`https://developer.nps.gov/api/v1/events?parkCode=brca&limit=2&api_key=AKIaxzlTDjKSD11PHylBcdrohl9zrbV1chzy3x9s`)
    .then(res => res.json())
    .then(parsedEvents => {events = parsedEvents.slice()
      console.log(events)
    })
  }

export const useEvents = () => {
  return events
}