import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Provider } from './Context';
import Header from './Header';
import SearchBar from './SearchBar';
import Content from './Content';

const Layout = styled.div`
  margin: 10px;
  font-family: 'Open Sans';
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(query) {
    this.setState({ query });
  }

  render() {
    const { endpoint, apiKey, title } = this.props;
    const { query } = this.state;

    return (
      <Provider value={{ endpoint, apiKey }}>
        <Layout>
          <Header title={title} />
          <SearchBar onChange={this.handleSearchTermChange} />
          <Content query={query} />
        </Layout>
      </Provider>
    );
  }
}

App.propTypes = {
  apiKey: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default App;
