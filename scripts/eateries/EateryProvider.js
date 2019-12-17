let eateries = []

export const useEateries = () => {
    return eateries.slice()
}
export const getEateries = () => {

    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(eateryArray => {
            eateries = eateryArray.slice()
            console.table(eateryArray)
        })
}