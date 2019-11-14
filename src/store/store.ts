import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { get_data_reducer } from './redusers/get-data-reducer';
import { MyStore } from '../types';

export const data = (setData: any) => setData.data; 

const rootReducer = combineReducers({
	getData: get_data_reducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
