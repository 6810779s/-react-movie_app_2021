import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({title, summary, poster, year, rating, genres}){
  return (
    <div className="movie">
      <Link
        to={{
          pathname:'/movie-detail',
          state: {year, title, summary, poster, genres, rating},
      }}
      >
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">
            {title}
          </h3>
          <h5 className="movie__year">{year}</h5>
          <h5 className="movie_rating">{rating}/10</h5>
          <ul className="movie__genres">
            {genres.map((genre, index)=>{
              return <li key={index} className="movie__genre">{genre}</li>;
            })}
          </ul>
          <p className="movie__summary">
            {summary.slice(0, 180)}...
          </p>
        </div>
      </Link>
    </div>
  );
  
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;