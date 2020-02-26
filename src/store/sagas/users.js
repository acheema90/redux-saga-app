import { takeEvery, take, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import { createUser, getUsers, deleteUser } from '../../api/users';

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

function* deleteUserRequest(userId) {
	try {
		yield call(deleteUser, userId);

		yield call(getUsers);
	} catch (e) {
		yield put(
			actions.usersError({
				error: 'An error occurred when trying to delete the user'
			})
		);
	}
}

function* watchDeleteUserRequest() {
	while (true) {
		const { payload } = yield take(actions.Types.DELETE_USER_REQUEST);
		yield call(deleteUserRequest, payload.userId);
	}
}

function* createUserRequest({ payload }) {
	try {
		yield call(createUser, {
			firstName: payload.firstName,
			lastName: payload.lastName
		});

		yield call(getUsers);
	} catch (e) {
		yield put(
			actions.usersError({
				error: 'An error occurred when trying to create the user'
			})
		);
	}
}

function* watchCreateUserRequest() {
	yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUserRequest);
}

function* watchGetUsersRequest() {
	yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsersRequest);
}

const usersSagas = [
	fork(watchGetUsersRequest),
	fork(watchDeleteUserRequest),
	fork(watchCreateUserRequest)
];

export default usersSagas;
