import React , { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comp extends Component{
	render(){
		return <a>Hello. {this.props.name}</a>
	}
}

Comp.propTypes = {
  name: PropTypes.string
};