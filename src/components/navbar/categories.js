import React from 'react'
import { connect } from 'react-redux'
import { changeCategory, clearCategory } from '../../actions'
import { Accordion, AccordionItem } from 'react-sanfona'

const categories = [{id:1, name:'WOMAN', child:[{id:2, name:'Skirt'},{id:3, name:'Dresses'}]},
					{id:4, name:'MAN', child:[{id:5, name:'Jackets'},{id:6, name:'Blazers'}]},
					{id:7, name:'KIDS', child:[{id:8, name:'T-shirts'},{id:9, name:'Sandals'}]}];
const Categories = props => {
    return (
        <div className="categories">
            <div style={{ cursor: 'pointer' }} onClick={ ()=> {props.onAllCategoryClick() } }>
            <h3 className="name">ALL</h3>
            </div>
        	<Accordion>
        	{categories.map(category => {
        		return (
        			<AccordionItem title={category.name} key={category.id} className="category" titleClassName="categoryTitle">
	        			<div className="categoryItem">
	        				{category.child.map(childCategory => {
	                   return (
	                   	<div key={childCategory.id} style={{fontWeight: props.currentCategory === childCategory.name ? 'bold': null}} onClick={ ()=> { console.log(childCategory); props.onCategoryClick(childCategory.name) } }>
	                   		{childCategory.name}
	                   	</div>
	                	)
                 })}
               </div>
        			</AccordionItem>
        		)
        	})}
        	</Accordion>
 
        </div>
        )



}
const mapStateToProps = state => {
    return {
        currentCategory: state.currentCategory
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCategoryClick: (category) => dispatch(changeCategory(category)),
        onAllCategoryClick: () => dispatch(clearCategory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)