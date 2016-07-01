export default function reducer (state = {}, action) {
	if (action.type === 'CHANGE_SIZE') {
		return Object.assign({}, state, {
			currentSize: action.payload.size
		})
	}
	else if (action.type === 'CHANGE_COLOR') {
		return Object.assign({}, state, {
			currentColor: action.payload.color
		})
	}
	else if (action.type === 'CHANGE_CATEGORY') {
		return Object.assign({}, state, {
			currentCategory: action.payload.category
		})
	}
	else if (action.type === 'CHANGE_RANGE') {
		return Object.assign({}, state, {
			currentRange: action.payload.range
		})
	}
	else if (action.type === 'CLEAR_CATEGORY') {
		return Object.assign({}, state, {
			currentCategory: null
		})
	}
	else if (action.type === 'CLEAR_COLOR') {
		return Object.assign({}, state, {
			currentColor: null
		})
	}
	else if (action.type === 'CLEAR_SIZE') {
		return Object.assign({}, state, {
			currentSize: null
		})
	}
	else if (action.type === 'RESET') {
		return Object.assign({}, state, {
			currentSize: null,
			currentCategory: null,
			currentColor: null,
			currentRange: null
		})
	}
	else {
		return state
	}
	
}
