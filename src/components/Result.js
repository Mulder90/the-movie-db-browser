import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ item }) => <div>{JSON.stringify(item)}</div>;

Result.propTypes = {
  // Come on eslint...I don't have time to specify this :)
  item: PropTypes.object.isRequired
};

export default Result;
