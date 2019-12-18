let iteneraries = []

export const saveIteneraries = itenerary => {
    return fetch('http//local:3000/db', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
        .then(getIteneraries)
}


export const getIteneraries = () => {
    return fetch('http//local:3000/db')
        .then(res => res.json())
        .then(parsedIteneraries => {
            iteneraries = parsedIteneraries.slice()
        })
}


export const useIteneraries = () => {
    return iteneraries
}