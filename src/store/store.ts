import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { get_data_reducer } from './redusers/get-data-reducer';

export const data = ({ state }: any) => state;

const rootReducer = combineReducers({
	getData: get_data_reducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
