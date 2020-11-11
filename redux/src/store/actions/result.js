import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
	return {
		type: actionTypes.STORE_RESULT,
		result: result,
	};
};

export const storeResult = (result) => {
	// just a simplification of a request to server
	return (dispatch) => {
		setTimeout(() => {
			dispatch(saveResult(result));
		}, 2000);
	};
};
export const deleteResult = (id) => {
	return {
		type: actionTypes.DELETE_RESULT,
		resultElId: id,
	};
};
