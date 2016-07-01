import React from 'react';
import { connect } from 'react-redux'
import { changeSize, clearSize } from '../../actions'
import Clear from 'react-icons/lib/md/clear'


const sizes = [{
	id: 1,
	type: 'xs'
}, {
	id: 2,
	type: 's'
}, {
	id: 3,
	type: 'm'
}, {
	id: 4,
	type: 'l'
}, {
	id: 5,
	type: 'xl'
}]

const Size = props => {
	return (
		<div className='sizes'>
			<div className="name">
				<h3>SIZE</h3>
				<Clear className="clear" onClick={ ()=> {props.onAllSizeClick() } } />
			</div>
			<div className="sizeAll">
			{ sizes.map(size => {
				return (
					<div className="colorOne size" style={{ background: props.currentSize === size.type ? '#828d8f' : null}} key={size.id} onClick={ () => props.onSizeClick(size.type) }>
						{size.type}
					</div>)
			}) }
		</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		currentSize: state.currentSize
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSizeClick: (size) => dispatch(changeSize(size)),
		onAllSizeClick: () => dispatch(clearSize())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Size)