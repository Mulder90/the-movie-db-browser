import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Results from './Results';

const Content = ({ query }) => (
  <React.Fragment>
    {query ? (
      <Search query={query}>
        {({ response, isLoading, hasError }) => {
          if (isLoading) {
            return <div>Loading...</div>;
          }

          if (hasError) {
            return <div>Ops! Something went wrong :( Please retry.</div>;
          }

          return <Results response={response} />;
        }}
      </Search>
    ) : (
      <div>Please type something in the search bar</div>
    )}
  </React.Fragment>
);

Content.propTypes = {
  query: PropTypes.string.isRequired
};

export default Content;
