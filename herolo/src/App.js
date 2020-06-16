import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import Weather from '../src/components/Weather'
import Favorites from '../src/components/Favorites'
import Box from '@material-ui/core/Box'
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Box display='flex' justifyContent='center'>
            <Box>
              <Switch>
                <Route path="/weather">
                  <Weather />
                </Route>
                <Route path="/favorites">
                  <Favorites />
                </Route>
                <Route path="/">
                  <Weather />
                </Route>
              </Switch>
            </Box>
          </Box>
        </div>
      </Router>
    );
  }
}

export default App;
