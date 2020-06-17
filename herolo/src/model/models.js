const axios = require('axios').default;

const apikey = 'WsgcEps6tQQpkjVRnDCl74HGx7gAzV1V'

export function getLocations(locationString) {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationString}`,
    }).then(function (response) {
        var results = response.data
        return results
    }).catch(function (error) {
    })
}

export function getCurrentCondition(locationKey) {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}&details=true`,
    }).then(function (response) {
        var results = response.data
        return results
    }).catch(function (error) {
        console.log(error)
    })
}

export function getFiveDayWeather(locationKey) {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}&metric=true`,
    }).then(function (response) {
        var results = response.data.DailyForecasts
        return results
    }).catch(function (error) {
        console.log(error)
    })
}