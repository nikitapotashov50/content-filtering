import React from 'react'
import { connect } from 'react-redux'
import Item from './content/item'


const Content = props => {
	const items = [{
		id: 1,
		size: 's',
		img: '/images/11.jpg',
		title: 'Jackets1',
		color: '#82d988',
		part: 'man',
		category: 'Jackets',
		description: 'description',
		price: '20'
	}, {
		id: 2,
		size: 'l',
		img: '/images/22.jpg',
		title: 'Sandals1',
		color: '#82d988',
		part: 'woman',
		category: 'Sandals',
		description: 'description',
		price: '30'
	}, {
		id: 3,
		size: 's',
		img: '/images/33.jpg',
		title: 'Sandals2',
		color: '#3b3e40',
		part: 'kids',
		category: 'Sandals',
		description: 'description',
		price: '40'
	}, {
		id: 4,
		size: 'xl',
		img: '/images/44.jpg',
		title: 'T-shirts1',
		color: '#828d87',
		part: 'man',
		category: 'T-shirts',
		description: 'description',
		price: '50'
	}, {
		id: 5,
		size: 'm',
		img: '/images/55.jpg',
		title: 'Dresses1',
		color: '#828d87',
		part: 'woman',
		category: 'Dresses',
		description: 'description',
		price: '60'
	}, {
		id: 6,
		size: 'm',
		img: '/images/66.jpg',
		title: 'Sandals',
		color: '#ededed',
		part: 'kids',
		category: 'Sandals',
		description: 'description',
		price: '70'
	}, {
		id: 7,
		size: 's',
		img: '/images/77.jpg',
		title: 'Skirt',
		color: '#bdbdbd',
		part: 'woman',
		category: 'Skirt',
		description: 'description',
		price: '80'
	}, {
		id: 8,
		size: 'l',
		img: '/images/88.jpg',
		title: 'Skirt',
		color: '#757575',
		part: 'man',
		category: 'Skirt',
		description: 'description',
		price: '90'
	}, {
		id: 9,
		size: 'xl',
		img: '/images/99.jpg',
		title: 'T-shirts',
		color: '#757575',
		part: 'kids',
		category: 'T-shirts',
		description: 'description',
		price: '100'
	}]
	return (
		<div className="content">
			<div className="items">
				{
					items
						.filter(item => {
							if (props.currentColor) { 
								return item.color === props.currentColor
							}
							return item 
						})
						.filter(item => {
							if (props.currentSize) {
								return item.size === props.currentSize
							}
							return item
						})
						.filter(item => {
							if (props.currentCategory) {
								return item.category === props.currentCategory
							}
							return item
						})
						.map(item => {
							return (
								<Item
									key={item.id}
									img={item.img}
									title={item.title}
									description={item.description}
									price={item.price} />
							)
						})
				}
				</div>
			</div>
		)
}

const mapStateToProps = state => ({
	currentSize: state.currentSize,
	currentColor: state.currentColor,
	currentCategory: state.currentCategory,

})

export default connect(mapStateToProps)(Content)

