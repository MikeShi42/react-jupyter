import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PrismCode from 'react-prism';

class Code extends Component {
  static propTypes = {
    className: PropTypes.string,
    language: PropTypes.string,
    string: PropTypes.string.isRequired,
    showCode: PropTypes.bool
  }

  render() {
    const { string, className, language = '', showCode } = this.props

    if (!showCode) return <div></div>

    return (
      <PrismCode component="pre" className={className} data-language={language}>
        {string}
      </PrismCode>
    )
  }
}

export default Code
