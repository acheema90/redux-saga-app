import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const configureStore = () => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
	sagaMiddleware.run(rootSaga);
	return store;
};
