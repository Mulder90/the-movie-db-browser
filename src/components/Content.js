import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from './Search';
import Results from './Results';

const Info = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Content = ({ query }) => (
  <React.Fragment>
    {query ? (
      <Search query={query}>
        {({ response, isLoading, hasError }) => {
          if (isLoading) {
            return <Info>Loading...</Info>;
          }

          if (hasError) {
            return <Info>Ops! Something went wrong :( Please retry.</Info>;
          }

          return <Results response={response} />;
        }}
      </Search>
    ) : (
      <Info>Type something in the search bar to start searching.</Info>
    )}
  </React.Fragment>
);

Content.propTypes = {
  query: PropTypes.string.isRequired
};

export default Content;
