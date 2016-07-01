import React from 'react';
import { connect } from 'react-redux'
import {changeRange} from '../../actions'
import InputRange from 'react-input-range'
import Clear from 'react-icons/lib/md/clear'

const Range = props => {
	
	return (
		<InputRange />
	)
}
const mapStateToProps = state => {
	return {
		currentRange: state.currentRange
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onRangeClick: (range) => dispatch(changeRange(range))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Range)