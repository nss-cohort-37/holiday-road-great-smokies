let iteneraries = []

export const saveIteneraries = itenerary => {
    return fetch('http://localhost:3000/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itenerary)
    })
        .then(getIteneraries)
}


export const getIteneraries = () => {
    return fetch('http://localhost:3000/itineraries')
        .then(res => res.json())
        .then(parsedIteneraries => {
            iteneraries = parsedIteneraries.slice()
        })
}


export const useIteneraries = () => {
    return iteneraries
}