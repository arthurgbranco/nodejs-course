// https://weatherstack.com/quickstart
// https://account.mapbox.com/

const request = require('request')
const location = 'Belo Horizonte'

const mapboxApiKey = 'pk.eyJ1IjoiYXJ0aHVyYnJhbmNvIiwiYSI6ImNrZjhsMTJvYjBkNW8ycm8wZnZsMHgwdWsifQ.4xyUIszpTcH9B_ATRl-wDA'
const mapboxApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(location)}.json?access_token=${mapboxApiKey}`

const coordinates = request({ url: mapboxApiUrl, json: true }, (error, response) => {
    const results = response.body.features[0].center
    return results.toString()
})

console.log('coordinates: ' + coordinates);

const weatherstackApiKey = '2e39b0ef029f5a044679549787ac79f3'
const weatherstackApiUrl = `http://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=${coordinates}&units=m`

request({ url: weatherstackApiUrl, json: true }, (error, response) => {
    const current = response.body.current
    console.log(`${current.weather_descriptions[0]}. ${current.temperature} degress out \
and feels like ${current.feelslike} degress.`)
})

// Geocoding
// Adress user input -> convert to Lat/Long -> input results on weather api url
