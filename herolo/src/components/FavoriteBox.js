import React, { Component } from 'react';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { getCurrentCondition } from '../model/models';

class FavoriteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationWeather: null
        }
        this.moveToWeather = this.moveToWeather.bind(this)
    }

    componentDidMount() {
        getCurrentCondition(this.props.locationKey).then((resultCurrentCondition) => {
            this.setState({
                locationWeather: resultCurrentCondition[0]
            })
        }).catch((error) => this.errorHandle())
    }

    errorHandle() {
        this.props.history.push('/error')
    }

    moveToWeather() {
        this.props.history.push('/weather/?locationKey=' + this.props.locationKey)
    }

    render() {
        return (
            <React.Fragment>
                    <Paper component={Button} fullWidth={true} onClick={this.moveToWeather}>
                        <Box height='350px' width='100%' display='flex' alignItems='center' justifyContent='flex-start' flexDirection='column'>
                            <Box mt={2}>
                                <Typography variant='h4'>{this.props.locationName}</Typography>
                                <Typography variant='h5'>{this.state.locationWeather ? this.state.locationWeather.Temperature.Metric.Value : ''} {this.state.locationWeather ? this.state.locationWeather.Temperature.Metric.Unit : ''}</Typography>
                            </Box>
                            <Box mt={15}>
                                <Typography variant='h5'>{this.state.locationWeather ? this.state.locationWeather.WeatherText : ''}</Typography>
                            </Box>
                        </Box>
                    </Paper>
            </React.Fragment >
        );
    }
}

export default FavoriteBox;

