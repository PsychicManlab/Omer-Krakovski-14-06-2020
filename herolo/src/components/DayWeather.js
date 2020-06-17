import React, { Component } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

class DayWeather extends Component {

    getDay(date) {
        return Days[new Date(date).getDay()]
    }

    render() {
        let { day } = this.props
        let stringDay = this.getDay(day.Date)
        let temperature = day.Temperature.Maximum

        return (
            <Grid item ms={12}>
                <Box width='100px' border={1} m={4} p={4}>
                    <Typography variant='h6'>{stringDay}</Typography>
                    <Typography variant='h6'>{temperature.Value} {temperature.Unit}</Typography>
                </Box>
            </Grid>
        )
    }
}

export default DayWeather;
