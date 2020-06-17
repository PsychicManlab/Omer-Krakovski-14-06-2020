const axios = require('axios').default;

const apikey = 'lZc5zzDCSL7AZODxAaPF9ldblwKJU8Kh'

export function getLocations(locationString) {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationString}`,
    }).then((response, error) => {
        var results = response.data
        return results
    })
}

export function getCurrentCondition(locationKey) {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}&details=true`,
    }).then((response, error) => {
        var results = response.data
        return results
    })
}

export function getFiveDayWeather(locationKey) {
    return axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}&metric=true`,
    }).then((response, error) => {
        var results = response.data.DailyForecasts
        return results
    })
}