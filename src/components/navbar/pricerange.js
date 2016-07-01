import React from 'react';
import Slider from 'react-input-range';

const Pricerange = () => {
	return (
		<div className='form'>
			<Slider className='InputRange-slider' maxValue={100} minValue={0} value={30} onChange={ (v) => console.log(v) } />
		</div>
	)
}
export default Pricerange