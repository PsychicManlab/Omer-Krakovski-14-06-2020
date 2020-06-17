import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import Weather from '../src/components/Weather'
import Favorites from '../src/components/Favorites'
import ErrorPage from '../src/components/ErrorPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import history from './history'

class App extends Component {
  render() {

    return (
      <Router history={history}>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path="/weather" component={Weather}/>
            <Route path="/favorites" component={Favorites}/>
            <Route path="/error" component={ErrorPage}/>
            <Route path="/" component={Weather}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
