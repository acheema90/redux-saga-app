import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import { getUsers } from '../../api/users';

function* getUsersRequest() {
	try {
		const result = yield call(getUsers);
		yield put(
			actions.getUsersSuccess({
				items: result.data.data
			})
		);
		console.info(result);
	} catch (e) {
		console.error(e);
	}
}

function* watchGetUsersRequest() {
	yield takeEvery(actions.Types.GET_USER_REQUEST, getUsersRequest);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
