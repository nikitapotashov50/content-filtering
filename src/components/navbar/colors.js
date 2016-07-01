import React from 'react';
import { connect } from 'react-redux'
import {changeColor, clearColor} from '../../actions'
import Clear from 'react-icons/lib/md/clear'

const Color = props => {
	const colors = [
		{
			id: 1,
			value: '#167bf0'
		},
		{
			id: 2,
			value: '#82d988'
		},
		{
			id: 3,
			value: '#3b3e40'
		},
		{
			id: 4,
			value: '#828d87'
		},
		{
			id: 5,
			value: '#b9c6c7'
		},
		{
			id: 6,
			value: '#cc9349'
		},
		{
			id: 7,
			value: '#797e8f'
		},
		{
			id: 8,
			value: '#757575'
		},
		{
			id: 9,
			value: '#bdbdbd'
		},
		{
			id: 10,
			value: '#ededed'
		}
	]
console.log(props)
	return (
		<div className='colors'>
			<div className="name">
				<h3>COLORS</h3>
				<Clear className="clear" onClick={ ()=> {props.onAllColorClick() } } />
			</div>
			<div className="colorAll">
			{ colors.map(color => {
				return (
					<div className="color"
						key={color.id}
						onClick={ () => props.onColorClick(color.value) }
						style={{ backgroundColor: color.value,boxShadow: props.currentColor === color.value ? '0 0 7px rgba(0,0,0,0.6)': null}}
					></div>
				)
			}) }
			</div>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		currentColor: state.currentColor
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onColorClick: (color) => dispatch(changeColor(color)),
		onAllColorClick: () => dispatch(clearColor())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Color)