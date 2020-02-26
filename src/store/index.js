import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const configureStore = () => {
	const composeEnhancers =
		(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
	sagaMiddleware.run(rootSaga);
	return store;
};
