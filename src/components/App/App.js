import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieEdit from '../MovieEdit/MovieEdit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={MovieList}/>
        <Route path="/details" component={MovieDetails}/>
        <Route path="/edit" component={MovieEdit}/>
      </div>
      </Router>
    );
  }
}



export default App;
