import * as c from './constants';
import { getData } from '../api/get_data';

export const setData = (value: any) => ({type: c.SET_DATA, value});

export const getDataThunk = () => async (dispatch: (action: { type: string; value: any; }) => void) => {
  const data = await getData();
	dispatch(setData(data));
};