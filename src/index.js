import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App apiKey={process.env.API_KEY} />,
  document.getElementById('root')
);
