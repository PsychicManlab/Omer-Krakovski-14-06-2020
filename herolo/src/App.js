import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import Weather from '../src/components/Weather'
import Favorites from '../src/components/Favorites'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import history from './history'

class App extends Component {  
  render() {

    return (
      <Router history={history}>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path="/weather">
              <Weather history={history}/>
            </Route>
            <Route path="/favorites" component={Favorites}>
            </Route>
            <Route path="/" component={Weather}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
