import React from 'react';
import PropTypes from 'prop-types';

class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasError: false,
      response: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps) {
    const { url } = this.props;
    if (previousProps.url !== url) {
      this.fetchData();
    }
  }

  fetchData() {
    const { url } = this.props;
    this.setState({
      isLoading: true
    });
    return fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          response,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          hasError: true
        });
      });
  }

  render() {
    const { children } = this.props;
    return children(this.state);
  }
}

Fetcher.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default Fetcher;
