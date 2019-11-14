import * as constants from './constants';
import { getData } from '../api/get-data';
import {Set_Data } from '../types/index';
import {MyStore } from '../types/index';

const setData = (value: []): Set_Data => ({type: constants.SET_DATA, value});

export const getDataThunk = () => async (dispatch: (action: Set_Data) => void) => {
  const data = await getData();
	dispatch(setData(data));
};