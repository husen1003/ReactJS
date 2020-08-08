const initialState = {
	margin : "20%"
};

const reducer = (state = initialState, action) => {
	let newMargin = {...state} ;
	if(action.type === 'INC'){
		newMargin.margin = '20%';
	}
	if(action.type === 'DEC'){
		newMargin.margin = '0%';
	}

	return newMargin;
}

export default reducer;