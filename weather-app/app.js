// https://weatherstack.com/quickstart
// https://account.mapbox.com/

const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = 'Belo Horizonte'

// Forecast

forecast.forecast(-19.917, -43.933, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})

// Geocoding

geocode.geocode(location, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})
