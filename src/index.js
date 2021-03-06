import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App
    apiKey={process.env.API_KEY}
    endpoint="https://api.themoviedb.org/3/search/movie"
    title="/THE_MOVIE_DB/ movie browser"
    imageEndpoint="https://image.tmdb.org/t/p/w300/"
    imagePlaceholderEndpoint="https://placekitten.com/300/450"
  />,
  document.getElementById('root')
);
