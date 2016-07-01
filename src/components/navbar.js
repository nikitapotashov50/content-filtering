import React from 'react';
import Size from './navbar/size';
import Colors from './navbar/colors'
import { connect } from 'react-redux'
import {reset} from '../actions'
import PriceRange from './navbar/pricerange'
import Categories from './navbar/categories'

const Navbar = props => {
	return (
		<div className='navbar'>
			<Categories />
			<Colors />
			<Size />
			<div className="reset" onClick={ ()=> {props.onResetClick() } }>reset</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		onResetClick: () => dispatch(reset())
	}
}
export default connect(null, mapDispatchToProps)(Navbar)