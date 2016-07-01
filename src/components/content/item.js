import React from 'react';
import Dollar from 'react-icons/lib/fa/dollar'

const Item = props => {
	
	return (
		<div className='item'>
			<div className="itemImg"> <img src={props.img} /></div>
			<div className='title'>{props.title}</div>
			<div>{props.description}</div>
			<div><Dollar style={{ fontSize: '13px' }} />{props.price}</div>
		</div>
	)
}
export default Item