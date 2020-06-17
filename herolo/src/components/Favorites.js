import React, { Component } from 'react';
import FavoriteBox from './FavoriteBox';
import { Grid } from '@material-ui/core';

class Favorites extends Component {
    render() {

        let favorites = localStorage

        return (
            <Grid container spacing={3}>
                {Object.keys(favorites).map((favorite, i) => {
                    return (
                        <Grid key={i} item xs={12} sm={4}>
                            <FavoriteBox history={this.props.history} locationKey={favorite} locationName={favorites.getItem(favorite)} />
                        </Grid>
                    )
                })}
            </Grid>
        );
    }
}

export default Favorites;

