// https://weatherstack.com/quickstart
// https://account.mapbox.com/

const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]

if (!location) {
    console.log('Please provide a location!')
} else {
    geocode.geocode(location, (error, { lat, long, name }) => {
        if (error) {
            return console.log(error)
        }

        forecast.forecast(lat, long, (error, forecastData) => {
            console.log(lat)
            console.log(long)

            if (error) {
                return console.log(error)
            }

            console.log(name)
            console.log(forecastData)
        })
    })
}
