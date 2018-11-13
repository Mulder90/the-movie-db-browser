import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

const Results = ({ response }) => {
  const { results } = response;
  if (results && results.length > 0) {
    return (
      <React.Fragment>
        {results.map(item => (
          <Result key={item.id} item={item} />
        ))}
      </React.Fragment>
    );
  }

  return <div>No results found</div>;
};

Results.propTypes = {
  // XXX: It's bettere to specify what kind of object it's expected.
  // Anyway, I don't have time :)
  response: PropTypes.object.isRequired
};

export default Results;
