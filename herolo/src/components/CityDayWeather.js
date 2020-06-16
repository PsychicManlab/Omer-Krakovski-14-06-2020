import React, { Component } from 'react';
import DayWeather from './DayWeather';
import { Box } from '@material-ui/core';

class CityDayWeather extends Component {
    render() {

        let { fiveDaysWeather } = this.props

        return (
            <React.Fragment>
                <Box p={7} display='flex' justifyContent='space-between'>
                        {fiveDaysWeather.map((day, i) => {
                            return (<DayWeather key={i} day={day} />)
                        })}
                </Box>
            </React.Fragment>
        )
    }
}

export default CityDayWeather;
