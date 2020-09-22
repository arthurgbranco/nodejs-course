const request = require('request')

const geocode = (address, callback) => {
    const apiKey =
        'pk.eyJ1IjoiYXJ0aHVyYnJhbmNvIiwiYSI6ImNrZjhsMTJvYjBkNW8ycm8wZnZsMHgwdWsifQ.4xyUIszpTcH9B_ATRl-wDA'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
        address
    )}.json?access_token=${apiKey}&limit=1`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location! Try another search.', undefined)
        } else {
            const features = response.body.features[0]

            callback(undefined, {
                name: features.place_name,
                coordinates: features.center.toString(),
            })
        }
    })
}

module.exports = {
    geocode: geocode,
}
