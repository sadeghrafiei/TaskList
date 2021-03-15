import { type } from 'os';
import { createStore , combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({});

const store = createStore(rootReducer,composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;