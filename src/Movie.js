import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, summary, poster, year, rating}){
  return <h1>Title: {title}</h1>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number,
};

export default Movie;