import { Types } from '../actions/users';

const INITIAL_STATE = {
	items: []
};

const users = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.GET_USER_SUCCESS:
			return {
				items: action.payload.items
			};
		default:
			return state;
	}
};

export default users;
