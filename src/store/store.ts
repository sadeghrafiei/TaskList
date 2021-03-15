import { createStore , combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import listReducer from './reducers/listReducer'
import notificaionReducer from './reducers/notificationReducer'

const rootReducer = combineReducers({
    list: listReducer,
    notificaion: notificaionReducer
});

const store = createStore(rootReducer,composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;