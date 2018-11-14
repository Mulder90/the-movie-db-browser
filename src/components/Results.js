import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Result from './Result';

// XXX: I love the new css display: grid ❤️
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
            <Result key={item.id} title={item.title} posterPath={item.poster_path}/>
          ))}
        </Container>
      </React.Fragment>
    );
  }

  return <Info>Found: 0 items. I'll give you an hint: Star Wars</Info>;
};

Results.propTypes = {
  response: PropTypes.object.isRequired
};

export default Results;
