import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import Weather from '../src/components/Weather'
import Favorites from '../src/components/Favorites'
import ErrorPage from '../src/components/ErrorPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import history from './history'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDarkMode: localStorage.getItem('darkMode')
    }
    this.changeDarkMode = this.changeDarkMode.bind(this)
  }

  changeDarkMode(event, value) {
    if (value) {
      localStorage.setItem('darkMode', true)
      this.setState({
        isDarkMode: localStorage.getItem('darkMode')
      })
    } else {
      localStorage.setItem('darkMode', false)
      this.setState({
        isDarkMode: localStorage.getItem('darkMode')
      })
    }
  }
  render() {

    let isDarkMode = this.state.isDarkMode === 'true'

    return (
      <Router history={history}>
        {isDarkMode ?
          <div className="Dark-App">
            <Header isDarkMode={isDarkMode} changeDarkMode={this.changeDarkMode}></Header>
            <Switch>
              <Route path="/weather" component={Weather} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/error" component={ErrorPage} />
              <Route path="/" component={Weather} />
            </Switch>
          </div> : <div className="App">
            <Header isDarkMode={isDarkMode} changeDarkMode={this.changeDarkMode}></Header>
            <Switch>
              <Route path="/weather" component={Weather} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/error" component={ErrorPage} />
              <Route path="/" component={Weather} />
            </Switch>
          </div>}
      </Router>
    );
  }
}

export default App;
