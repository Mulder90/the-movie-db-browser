import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Consumer } from './Context';

const Item = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Title = styled.div`
  color: white;
  margin: 5px;
`;

const Result = ({ title, posterPath }) => (
  <Consumer>
    {({ imageEndpoint, imagePlaceholderEndpoint }) => {
      const src = posterPath
        ? `${imageEndpoint}${posterPath}`
        : imagePlaceholderEndpoint;
      return (
        <Item>
          <Img src={src} alt={title} />
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
        </Item>
      );
    }}
  </Consumer>
);

Result.defaultProps = {
  title: '',
  posterPath: ''
};

Result.propTypes = {
  title: PropTypes.string,
  posterPath: PropTypes.string
};

export default Result;
