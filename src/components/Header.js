import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    siteName: PropTypes.string.isRequired
  };
  render() {
    return (
      <h1 className="top"> {this.props.siteName}</h1>
    )
  }
}
export default Header;
