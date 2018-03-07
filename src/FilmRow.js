import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
  render() {

    const { title, date, key, url } = this.props

    const posterUrl = "https://image.tmdb.org/t/p/w780/" + url
    const year = new Date(date).getFullYear()

    return(
      <div className="film-row">
        <FilmPoster title={title} url={url} />
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
      </div>
    )
  }
}

export default FilmRow;
