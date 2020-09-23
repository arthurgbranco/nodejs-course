const request = require('request')

const forecast = (lat, long, callback) => {
    const apiKey = '2e39b0ef029f5a044679549787ac79f3'
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${lat},${long}`

    request({ url: apiUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location! Try another search.', undefined)
        } else {
            const current = response.body.current

            callback(undefined, {
                weather_descriptions: current.weather_descriptions[0],
                temperature: current.temperature,
                feelslike: current.feelslike,
            })
        }
    })
}

module.exports = {
    forecast: forecast,
}
