import { all } from 'redux-saga/effects';
import usersSagas from './users';

function* rootSaga() {
	yield all([...usersSagas]);
}

export default rootSaga;
