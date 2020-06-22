const axios = require('axios').default;

const apikey = 'dVHGK8BQoamwmFUkfoCc5GjY3emalitB'

export function getLocations(locationString) {
    return axios({
        method: 'get',
        url: `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationString}`,
    }).then((response, error) => {
        var results = response.data
        return results
    })
}

export function getCurrentCondition(locationKey) {
    return axios({
        method: 'get',
        url: `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}&details=true`,
    }).then((response, error) => {
        var results = response.data
        return results
    })
}

export function getFiveDayWeather(locationKey) {
    return axios({
        method: 'get',
        url: `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}&metric=true`,
    }).then((response, error) => {
        var results = response.data.DailyForecasts
        return results
    })
}

export function getCurrentLocation(lat, lon) {
    return axios({
        method: 'get',
        url: `https://dataservice.accuweather.com//locations/v1/cities/geoposition/search?apikey=${apikey}&q=${lat}%2C${lon}`,
    }).then((response, error) => {
        var results = response.data
        return results
    })
}