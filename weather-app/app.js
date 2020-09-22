// https://weatherstack.com/quickstart
// https://account.mapbox.com/

const request = require('request')
const geocode = require('./utils/geocode')

const location = 'Belo Horizonte'

const mapboxApiKey =
    'pk.eyJ1IjoiYXJ0aHVyYnJhbmNvIiwiYSI6ImNrZjhsMTJvYjBkNW8ycm8wZnZsMHgwdWsifQ.4xyUIszpTcH9B_ATRl-wDA'
const mapboxApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
    location
)}.json?access_token=${mapboxApiKey}
&limit=1`

// Geocoding
// Adress user input -> convert to Lat/Long -> input results on weather api url

// request({ url: mapboxApiUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to geolocation api!');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location!')
//     } else {
//         const results = response.body.features[0].center
//         console.log(results.toString())
//     }
// })

const weatherstackApiKey = '2e39b0ef029f5a044679549787ac79f3'
const weatherstackApiUrl = `http://api.weatherstack.com/current
?access_key=${weatherstackApiKey}
&query=${encodeURI(location)}`

// Weather

request({ url: weatherstackApiUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather api!')
    } else if (response.body.error) {
        console.log('Unable to find location! Try another search.')
    } else {
        const current = response.body.current
        console.log(`${current.weather_descriptions[0]}. ${current.temperature} degress out \
and feels like ${current.feelslike} degress.`)
    }
})

geocode.geocode(location, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})
