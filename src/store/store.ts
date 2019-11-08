import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { set_data_reducer } from './redusers/get_data_reducer';

export const data = ({ setData }: any) => setData.data;

const rootReducer = combineReducers({
	setData: set_data_reducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
