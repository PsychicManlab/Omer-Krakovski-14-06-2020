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
            <Box m={1} border={1}>
                <Grid container justify='center' alignItems='center' style={{ width: '170px', height: '150px' }} spacing={1}>
                    <Grid container item xs={12} justify='center' spacing={5}>
                        <Typography variant='h5'>{stringDay}</Typography>
                    </Grid>
                    <Grid container item xs={12} justify='center' spacing={5}>
                        <Typography variant='h5'>{temperature.Value} {temperature.Unit}</Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default DayWeather;
