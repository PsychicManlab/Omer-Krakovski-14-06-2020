import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getLocations, getCurrentCondition, getFiveDayWeather, getCurrentLocation } from '../model/models';
import Box from '@material-ui/core/Box'
import CityInfo from './CityInfo';
import { Paper, Container } from '@material-ui/core';

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
            isFavorite: false,
            isError: false
        }
        this.inputChange = this.inputChange.bind(this)
        this.onChange = this.onChange.bind(this)
        this.addToFavorties = this.addToFavorties.bind(this)
        this.RemoveFromFavorties = this.RemoveFromFavorties.bind(this)
    }

    componentDidMount() {
        let locationKey = new URLSearchParams(document.location.search).get('locationKey')
        if (locationKey) {
            getCurrentCondition(locationKey).then((resultCurrentCondition, fail) => {
                this.setState({
                    selectedLocationWeather: resultCurrentCondition,
                    selectedLocationKey: locationKey,
                    selectedName: localStorage.getItem(locationKey),
                    isFavorite: true
                })
            }).catch((error) => this.handleError())
            getFiveDayWeather(locationKey).then((resultFiveDaysCondition) => {
                this.setState({
                    selectedLocationFiveDaysWeather: resultFiveDaysCondition
                })
            }).catch((error) => this.handleError())
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    getCurrentLocation(position.coords.latitude, position.coords.longitude).then((resultCurrentLocation) => {
                        this.setState({
                            selectedLocationKey: resultCurrentLocation.Key,
                            selectedName: resultCurrentLocation.LocalizedName
                        })
                    }).catch((error) => console.log(error))
                })
                getCurrentCondition(this.state.selectedLocationKey).then((resultCurrentCondition) => {
                    this.setState({
                        selectedLocationWeather: resultCurrentCondition,
                    })
                }).catch((error) => this.handleError())
                getFiveDayWeather(this.state.selectedLocationKey).then((resultFiveDaysCondition) => {
                    this.setState({
                        selectedLocationFiveDaysWeather: resultFiveDaysCondition
                    })
                }).catch((error) => this.handleError())
            } else {
                getCurrentCondition('215854').then((resultCurrentCondition) => {
                    this.setState({
                        selectedLocationWeather: resultCurrentCondition,
                        selectedLocationKey: '215854'
                    })
                }).catch((error) => this.handleError())
                getFiveDayWeather('215854').then((resultFiveDaysCondition) => {
                    this.setState({
                        selectedLocationFiveDaysWeather: resultFiveDaysCondition
                    })
                }).catch((error) => this.handleError())
            }
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
            }).catch((error) => this.handleError())
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
                    selectedLocationKey: value.Key,
                    locations: []
                })
            }).catch((error) => this.handleError())
            getFiveDayWeather(value.Key).then((resultFiveDaysCondition) => {
                this.setState({
                    selectedLocationFiveDaysWeather: resultFiveDaysCondition
                })
            }).catch((error) => this.handleError())
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
    }

    handleError() {
        this.props.history.push('/error')
    }

    isDarkMode() {
        return localStorage.getItem('darkMode')
    }


    render() {

        let isDarkMode = this.isDarkMode() === 'true'

        return (
            <React.Fragment>
                <Container>
                    <Box>
                        <Box m={5} display='flex' justifyContent='center' alignItems='center'>
                            <Autocomplete
                                options={this.state.locations}
                                getOptionLabel={(option) => option.LocalizedName}
                                onInputChange={this.inputChange}
                                getOptionSelected={(option, value) => option.Key === value.Key}
                                onChange={this.onChange}
                                style={{ width: '100%' }}
                                clearOnBlur={false}
                                renderInput={(params) => <TextField {...params} label="Locations" variant="outlined" />}
                            />
                        </Box>
                        <Box mt={5}>
                            {isDarkMode ?
                                <Paper style={{ backgroundColor: '#686868', color: 'white' }} elevation={3}>
                                    <CityInfo location={this.state.selectedLocationWeather[0]} locationName={this.state.selectedName} fiveDaysWeather={this.state.selectedLocationFiveDaysWeather} selectedLocationKey={this.state.selectedLocationKey} isFavorite={this.state.isFavorite} addToFavorties={this.addToFavorties} RemoveFromFavorties={this.RemoveFromFavorties} isDarkMode={isDarkMode}></CityInfo>
                                </Paper> :
                                <Paper elevation={3}>
                                    <CityInfo location={this.state.selectedLocationWeather[0]} locationName={this.state.selectedName} fiveDaysWeather={this.state.selectedLocationFiveDaysWeather} selectedLocationKey={this.state.selectedLocationKey} isFavorite={this.state.isFavorite} addToFavorties={this.addToFavorties} RemoveFromFavorties={this.RemoveFromFavorties}></CityInfo>
                                </Paper>}
                        </Box>
                    </Box>
                </Container>
            </React.Fragment >
        );
    }
}

export default Weather;

