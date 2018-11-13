import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  margin-bottom: 10px;
  border: 2px solid black;
  outline: none;
  padding: 10px;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const { onChange } = this.props;
    this.search = _.debounce(onChange, 250);
  }

  handleOnChange(event) {
    const { value } = event.target;
    this.setState(
      {
        value
      },
      this.search(value)
    );
  }

  render() {
    const { value } = this.state;

    return (
      <Input
        type="text"
        name="query"
        placeholder="Search for a movie..."
        onChange={this.handleOnChange}
        value={value}
      />
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
