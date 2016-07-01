export function changeSize(size) {
	return {
		type: 'CHANGE_SIZE',
		payload: {
			size
		}
	}	
}
export function changeColor(color) {
	return {
		type: 'CHANGE_COLOR',
		payload: {
			color
		}
	}	
}
export function changeCategory(category) {
	return {
		type: 'CHANGE_CATEGORY',
		payload: {
			category
		}
	}	
}
export function changeRange(range) {
	return {
		type: 'CHANGE_RANGE',
		payload: {
			range
		}
	}	
}
export function clearCategory() {
	return {
		type: 'CLEAR_CATEGORY',
	}	
}
export function clearColor() {
	return {
		type: 'CLEAR_COLOR',
	}	
}
export function clearSize() {
	return {
		type: 'CLEAR_SIZE',
	}	
}
export function reset() {
	return {
		type: 'RESET',
	}	
}