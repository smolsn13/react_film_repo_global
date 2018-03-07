import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {

    const { films } = this.props

    let allFilms = films.map(function(film, index) {
      return (
        <FilmRow title={film.title} date={film.release_date} key={film.id} url={film.poster_path}/>
      )
    })

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {allFilms}
        </div>
    );
  }
}

export default FilmListing;
