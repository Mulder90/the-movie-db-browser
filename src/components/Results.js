import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Result from './Result';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
`;

const Info = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Results = ({ response }) => {
  const { results } = response;
  if (results && results.length > 0) {
    return (
      <React.Fragment>
        <Info>Found: {results.length} items</Info>
        <Container>
          {results.map(item => (
            <Result key={item.id} {...item} />
          ))}
        </Container>
      </React.Fragment>
    );
  }

  return <Info>No items found</Info>;
};

Results.propTypes = {
  // XXX: It's bettere to specify what kind of object it's expected.
  // Anyway, I don't have time :)
  response: PropTypes.object.isRequired
};

export default Results;
