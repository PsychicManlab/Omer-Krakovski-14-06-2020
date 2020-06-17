import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <Box mb={2}>
                <ul className="App-header">
                    <li className="title">Herolo Weather App</li>
                    <li className='menu'>
                        <Box display='flex'>
                            <Box m={3}>
                                <Button component={Link} to='/weather' color='inherit' variant='outlined'>Weather</Button>
                            </Box>
                            <Box m={3}>
                                <Button component={Link} to='/favorites' color='inherit' variant='outlined'>Favorites</Button>
                            </Box>
                        </Box>
                    </li>
                </ul>
            </Box>
        )
    }
}

export default Header;
