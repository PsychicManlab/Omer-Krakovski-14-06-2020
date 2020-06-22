import React, { Component } from 'react';
import FavoriteBox from './FavoriteBox';
import { Grid, Box } from '@material-ui/core';

class Favorites extends Component {
    render() {

        let favorites = Object.assign({}, localStorage)
        delete favorites.darkMode

        return (
            <Box m={2}>
                <Grid container spacing={3}>
                    {Object.keys(favorites).map((favorite, i) => {
                        return (
                            <Grid key={i} item xs={12} sm={4}>
                                <FavoriteBox history={this.props.history} locationKey={favorite} locationName={favorites[favorite]} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        );
    }
}

export default Favorites;

