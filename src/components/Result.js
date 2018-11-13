import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Result = ({ title, poster_path }) => {
  {
    const src = poster_path
      ? `https://image.tmdb.org/t/p/w300/${poster_path}`
      : 'https://placekitten.com/300/450';
    return (
      <Item>
        <Img src={src} alt={title} />
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </Item>
    );
  }
};

Result.defaultProps = {
  title: '',
  poster_path: ''
};

Result.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string
};

export default Result;
