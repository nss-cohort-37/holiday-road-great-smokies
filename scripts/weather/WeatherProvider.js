let weather = []

export const getWeather = (lat, long, apikey) =>{
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apikey}`)
  .then(res => res.json())
  .then(parsedWeather => {weather = parsedWeather.list.slice()
})

// export const getWeather = () =>{
//   return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=41.26093905&lon=-81.57116722&appid=2aa5986f620fa1dd066ffd051d2a7173`)
//   .then(res => res.json())
//   .then(parsedWeather => {weather = parsedWeather.list.slice()
//     console.log(parsedWeather)
// })

}
export const useWeather = () =>{
  return weather
}