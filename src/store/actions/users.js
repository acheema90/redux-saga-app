export const Types = {
	GET_USER_REQUEST: 'GET_USER_REQUEST',
	GET_USER_SUCCESS: 'GET_USER_SUCCESS'
};

export const getUsersRequest = () => ({
	type: Types.GET_USER_REQUEST
});

export const getUsersSuccess = items => ({
	type: Types.GET_USER_SUCCESS,
	payload: {
		items
	}
});
