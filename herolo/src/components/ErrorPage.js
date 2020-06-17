import React, { Component } from 'react';
import { Paper } from '@material-ui/core';


class ErrorPage extends Component {
    render() {
        return (
            <Paper>
                You have exceed the number of uses on the API
            </Paper>
        );
    }
}

export default ErrorPage;

