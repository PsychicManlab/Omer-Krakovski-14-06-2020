import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Box, Switch, Typography } from '@material-ui/core';

class Header extends Component {
    render() {
        let isDarkMode = this.props.isDarkMode

        return (
            <Box mb={2}>
                {isDarkMode ? <ul className="Dark-App-header">
                    <li className="title">Herolo Weather App</li>
                    <li className='menu'>
                        <Box display='flex'>
                            <Box m={1}>
                                <Typography>Dark mode</Typography>
                                <Switch
                                    color='primary'
                                    onChange={this.props.changeDarkMode}
                                    checked={isDarkMode}
                                ></Switch>
                            </Box>
                            <Box m={1}>
                                <Button component={Link} to='/weather' color='inherit' variant='outlined'>Weather</Button>
                                <Button component={Link} to='/favorites' color='inherit' variant='outlined'>Favorites</Button>
                            </Box>
                        </Box>
                    </li>
                </ul> :
                    <ul className="App-header">
                        <li className="title">Herolo Weather App</li>
                        <li className='menu'>
                            <Box display='flex'>
                                <Box m={1}>
                                    <Typography>Light Mode</Typography>
                                    <Switch
                                        color='primary'
                                        onChange={this.props.changeDarkMode}
                                        checked={isDarkMode}
                                    ></Switch>
                                </Box>
                                <Box p={1} m={1}>
                                    <Button component={Link} to='/weather' color='inherit' variant='outlined'>Weather</Button>
                                    <Button component={Link} to='/favorites' color='inherit' variant='outlined'>Favorites</Button>
                                </Box>
                            </Box>
                        </li>
                    </ul>}
            </Box>
        )
    }
}

export default Header;
