import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, summary, poster, year, rating}){
  return <h1>{title}</h1>;
}

Movie.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number,
};

export default Movie;