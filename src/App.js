import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const films = TMDB.films

class App extends Component {
  render() {

    return (
      <div className="film-library">
        <FilmListing films={films}/>
        <FilmDetails films={films}/>
      </div>
    );
  }
}

export default App;
