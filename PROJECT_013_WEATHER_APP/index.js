console.log("Weather App")

const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

console.log(result)
console.log(input)
console.log(btn)

let CityName;
let Latitude;
let Longitude;
let lastCity = ""

async function GetLatLon_data() {

    const Lat_Lon = `https://nominatim.openstreetmap.org/search?q=${CityName}&format=json`

    let response = await fetch(Lat_Lon)
    let data = await response.json()

    Latitude = data[0].lat
    Longitude = data[0].lon

    console.log(`${CityName} Latitude: `, data[0].lat, `${CityName} Longitude: `, data[0].lon)

    GetWeather_data()
}

async function GetWeather_data() {

    const Weather = `https://api.open-meteo.com/v1/forecast?latitude=${Latitude}&longitude=${Longitude}&current_weather=true`

    let response = await fetch(Weather)
    let data = await response.json()

    console.log(data)

    let weather_keys = Object.keys(data.current_weather)
    let weather_values = Object.values(data.current_weather)

    let weather_unit_values = Object.values(data.current_weather_units)

    result.innerHTML = ""

    for (let i = 0; i < weather_keys.length; i++) {
        console.log(`${weather_keys[i]} = ${weather_values[i]} ${weather_unit_values[i]}`)
        result.innerHTML += `${weather_keys[i]} = ${weather_values[i]} ${weather_unit_values[i]} <br>`
    }

}

function GetWeather() {
    const CityInput = input.value.trim().toLowerCase()

    if (CityInput === "") {
        result.textContent = "Enter a city name!"
        return
    }

    if (CityInput === lastCity) {
        alert("you already fetched weather for this city")
        return
    }

    CityName = CityInput
    result.innerHTML = ""
    lastCity = CityInput

    GetLatLon_data()
}

btn.addEventListener("click", () => {
    GetWeather()
})
