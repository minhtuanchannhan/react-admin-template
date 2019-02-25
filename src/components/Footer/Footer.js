import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {};

class Footer extends Component {
	render() {

		// eslint-disable-next-line
    const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<span>React Admin Template &copy; 2018.</span>
				<span className="ml-auto">Powered by <a href="https://minhtuanchannhan.com">Tuan Le Minh</a></span>
			</React.Fragment>
		);
	}
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
