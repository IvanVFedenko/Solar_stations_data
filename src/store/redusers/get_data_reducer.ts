import { SET_DATA } from '../constants';

const initialState = {
  inverter_one: [],
  inverter_two: [],
};

export const set_data_reducer = (state = initialState, action: { type: string; value: any; }) => {
  switch (action.type){
    case SET_DATA:
      return {
        ...state,
        inverter_one: action.value[0],
        inverter_two: action.value[1],
      }
      default:
        return state;
  }
}