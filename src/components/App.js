import React from 'react';
import PropTypes from 'prop-types';

const App = ({ apiKey }) => <div>{apiKey}</div>;

App.propTypes = {
  apiKey: PropTypes.string.isRequired
};

export default App;
