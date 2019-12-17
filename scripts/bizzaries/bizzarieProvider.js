let attractions = []

export const useBizzarie = () => attractions.slice()

export const getbizzareries = () => {
    // Load database state into application state
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then((bizzArray) => {
            attractions = bizzArray
        })
}