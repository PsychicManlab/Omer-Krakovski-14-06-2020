import React, { Component } from 'react';
import '../css/CityInfo.css';
import { Box, Button } from '@material-ui/core';
import CityDayWeather from '../components/CityDayWeather'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class CityInfo extends Component {
    render() {
        let { location, locationName, fiveDaysWeather, isFavorite, RemoveFromFavorties, addToFavorties } = this.props

        return (
            <React.Fragment>
                <Box display='flex' justifyContent='space-between'>
                    <div className='cityInfo'>
                        <div className='cityName'>
                            {locationName ? locationName : ''}
                        </div>
                        <div className='temperature'>
                            {location ? location.Temperature.Metric.Value : ''} {location ? location.Temperature.Metric.Unit : ''}
                        </div>
                    </div>
                    <div className='favorties'>
                        <Box mr={3}>
                            {isFavorite ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
                        </Box>
                        {isFavorite ? <Button variant='outlined' onClick={RemoveFromFavorties}>Remove from Favorites</Button> : <Button variant='outlined' onClick={addToFavorties}>Add to Favorites</Button>}
                    </div>
                </Box>
                <div className='weatherText'>{location ? location.WeatherText : 'Cloudy'}</div>
                {Object.keys(fiveDaysWeather).length !== 0 ? <CityDayWeather fiveDaysWeather={fiveDaysWeather} /> : <div></div>}
            </React.Fragment>
        )
    }
}

export default CityInfo;
