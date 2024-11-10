import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { searchReducer } from '../redux/reducers';
import { watchSearchRequests } from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		search: searchReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchSearchRequests);

export default store;
