import React, { Component } from 'react';
import { Box, Button, Grid, Typography, Switch } from '@material-ui/core';
import CityDayWeather from '../components/CityDayWeather'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class CityInfo extends Component {
    render() {
        let { location, locationName, fiveDaysWeather, isFavorite, RemoveFromFavorties, addToFavorties, isFahrenheit, changeDegree } = this.props

        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box m={4} display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
                            <Box mb={3}>
                                {locationName ? locationName : ''}
                            </Box>
                            <Box>
                                {location ? (isFahrenheit ? location.Temperature.Imperial.Value : location.Temperature.Metric.Value) : ''} {location ? (isFahrenheit ? location.Temperature.Imperial.Unit : location.Temperature.Metric.Unit) : ''}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display='flex' justifyContent='flex-end' m={4}>
                            <Box mr={2}>
                                {isFavorite ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
                            </Box>
                            <Box>
                                {isFavorite ? <Button variant='outlined' onClick={RemoveFromFavorties}>Remove from Favorites</Button> : <Button variant='outlined' onClick={addToFavorties}>Add to Favorites</Button>}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box m={4}>
                            {isFahrenheit ? <Typography>
                                Fahrenheit
                            </Typography> :
                                <Typography>
                                    Celsius
                                </Typography>}
                            <Switch
                                onChange={changeDegree}
                                checked={isFahrenheit}
                            >Hello</Switch>
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <Box mb={8}>
                            <Typography variant='h1'>{location ? location.WeatherText : ''}</Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        {Object.keys(fiveDaysWeather).length !== 0 ? <CityDayWeather fiveDaysWeather={fiveDaysWeather} /> : <div></div>}
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default CityInfo;
