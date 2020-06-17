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
            selectedLocationFiveDaysWeather: {},
            selectedLocationKey: '215854',
            favorites: localStorage,
            isFavorite: false
        }
        this.inputChange = this.inputChange.bind(this)
        this.onChange = this.onChange.bind(this)
        this.addToFavorties = this.addToFavorties.bind(this)
        this.RemoveFromFavorties = this.RemoveFromFavorties.bind(this)
    }

    componentDidMount() {
        let locationKey = new URLSearchParams(document.location.search).get('locationKey')
        if(locationKey) {
            getCurrentCondition(locationKey).then((resultCurrentCondition) => {
                this.setState({
                    selectedLocationWeather: resultCurrentCondition,
                    selectedLocationKey: locationKey,
                    selectedName: localStorage.getItem(locationKey)
                })
            })
            getFiveDayWeather(locationKey).then((resultFiveDaysCondition) => {
                this.setState({
                    selectedLocationFiveDaysWeather: resultFiveDaysCondition
                })
            })
        } else {
            getCurrentCondition('215854').then((resultCurrentCondition) => {
                this.setState({
                    selectedLocationWeather: resultCurrentCondition,
                    selectedLocationKey: '215854'
                })
            })
            getFiveDayWeather('215854').then((resultFiveDaysCondition) => {
                this.setState({
                    selectedLocationFiveDaysWeather: resultFiveDaysCondition
                })
            })
        }
        if (this.state.favorites.getItem(this.state.selectedLocationKey) !== null) {
            this.setState({
                isFavorite: true
            })
        } else {
            this.setState({
                isFavorite: false
            })
        }
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

    addToFavorties() {
        localStorage.setItem(this.state.selectedLocationKey, this.state.selectedName)
        this.setState({
            favorites: localStorage,
            isFavorite: true
        })
    }

    RemoveFromFavorties() {
        localStorage.removeItem(this.state.selectedLocationKey)
        this.setState({
            favorites: localStorage,
            isFavorite: false
        })
    }

    onChange(event, value) {
        if (value) {
            getCurrentCondition(value.Key).then((resultCurrentCondition) => {
                this.setState({
                    selectedLocationWeather: resultCurrentCondition,
                    selectedName: value.LocalizedName,
                    selectedLocationKey: value.Key
                })
            })
            getFiveDayWeather(value.Key).then((resultFiveDaysCondition) => {
                this.setState({
                    selectedLocationFiveDaysWeather: resultFiveDaysCondition
                })
            })
        }
        if (this.state.favorites.getItem(value.Key) !== null) {
            this.setState({
                isFavorite: true
            })
        } else {
            this.setState({
                isFavorite: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Box display='flex' justifyContent='center'>
                    <Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Autocomplete
                                id="combo-box-demo"
                                options={this.state.locations}
                                getOptionLabel={(option) => option.LocalizedName}
                                onInputChange={this.inputChange}
                                getOptionSelected={(option, value) => option === value}
                                onChange={this.onChange}
                                style={{ width: 300 }}
                                clearOnBlur={false}
                                renderInput={(params) => <TextField {...params} label="Locations" variant="outlined" />}
                            />
                        </Box>
                        <Box>
                            <Box style={{ width: '1000px', height: '600px' }} border={1} {...defaultProps}>
                                <CityInfo location={this.state.selectedLocationWeather[0]} locationName={this.state.selectedName} fiveDaysWeather={this.state.selectedLocationFiveDaysWeather} selectedLocationKey={this.state.selectedLocationKey} isFavorite={this.state.isFavorite} addToFavorties={this.addToFavorties} RemoveFromFavorties={this.RemoveFromFavorties}></CityInfo>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </React.Fragment >
        );
    }
}

export default Weather;

