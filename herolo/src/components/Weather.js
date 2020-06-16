import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getLocations, getCurrentCondition, getFiveDayWeather } from '../model/models';
import Box from '@material-ui/core/Box'
import CityInfo from './CityInfo';

const defaultProps = {
    mt: 10,
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
};

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            selectedName: 'Tel Aviv',
            selectedLocationWeather: {},
            selectedLocationFiveDaysWeather: {}
        }
        this.inputChange = this.inputChange.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        getCurrentCondition('215854').then((resultCurrentCondition) => {
            this.setState({
                selectedLocationWeather: resultCurrentCondition,
            })
        })
        getFiveDayWeather('215854').then((resultFiveDaysCondition) => {
            this.setState({
                selectedLocationFiveDaysWeather: resultFiveDaysCondition
            })
        })
    }

    inputChange(event, value) {
        if (value !== '') {
            getLocations(value).then((resultLocations) => {
                if (resultLocations) {
                    this.setState({
                        locations: resultLocations
                    })
                }
            }).catch()
        } else {
            this.setState({
                locations: []
            })
        }
    }

    onChange(event, value) {
        if (value.Key) {
            getCurrentCondition(value.Key).then((resultCurrentCondition) => {
                this.setState({
                    selectedLocationWeather: resultCurrentCondition,
                    selectedName: value.LocalizedName,
                })
            })
            getFiveDayWeather(value.Key).then((resultFiveDaysCondition) => {
                this.setState({
                    selectedLocationFiveDaysWeather: resultFiveDaysCondition
                })
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Autocomplete
                        id="combo-box-demo"
                        options={this.state.locations}
                        getOptionLabel={(option) => option.LocalizedName}
                        onInputChange={this.inputChange}
                        getOptionSelected={(option, value) => option.Key === value.Key}
                        onChange={this.onChange}
                        style={{ width: 300 }}
                        clearOnBlur={false}
                        renderInput={(params) => <TextField {...params} label="Locations" variant="outlined" />}
                    />
                </Box>
                <Box>
                    <Box style={{ width: '1000px', height: '600px' }} border={1} {...defaultProps}>
                        <CityInfo location={this.state.selectedLocationWeather[0]} locationName={this.state.selectedName} fiveDaysWeather={this.state.selectedLocationFiveDaysWeather}></CityInfo>
                    </Box>
                </Box>
            </React.Fragment >
        );
    }
}

export default Weather;

