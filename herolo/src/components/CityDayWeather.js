import React, { Component } from 'react';
import DayWeather from './DayWeather';
import { Grid } from '@material-ui/core';

class CityDayWeather extends Component {
    render() {

        let { fiveDaysWeather } = this.props

        return (
            {fiveDaysWeather}&&<React.Fragment>
                <Grid container justify='center' alignItems='center' spacing={1}>
                        {fiveDaysWeather.map((day, i) => {
                            return (<DayWeather key={i} day={day} />)
                        })}
                </Grid>
            </React.Fragment>
        )
    }
}

export default CityDayWeather;
