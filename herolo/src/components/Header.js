import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <ul className="App-header">
                <li className="title">Herolo Weather App</li>
                <li className='menu'>
                    <Button component={Link} to='/weather' color='inherit' variant='outlined'>Weather</Button>
                    <Button component={Link} to='/favorites' color='inherit' variant='outlined'>Favorites</Button>
                </li>
            </ul>
        )
    }
}

export default Header;
