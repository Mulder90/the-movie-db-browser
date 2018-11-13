import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App
    apiKey={process.env.API_KEY}
    endpoint="https://api.themoviedb.org/3/search/movie"
    title="themoviedb search engine"
  />,
  document.getElementById('root')
);
