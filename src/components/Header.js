import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Header = ({ title }) => <Title>{title}</Title>;

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
