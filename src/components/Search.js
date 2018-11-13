import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Fetcher from './Fetcher';

const Search = ({ query, children }) => (
  <Consumer>
    {({ endpoint, apiKey }) => (
      <Fetcher url={`${endpoint}?api_key=${apiKey}&query=${query}`}>
        {children}
      </Fetcher>
    )}
  </Consumer>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default Search;
