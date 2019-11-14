import { SET_DATA } from '../constants';
import { MyStore, ActionType, Set_Data } from '../../types/index';


const initialState = {
 // payload: {
    data: [
      {
        createdAt: '',
        inverterId: 0,
        ac: {
          power: 0 ,
          voltage: 0 || null,
          current: 0 || null,
          energy: 0 || null,
          freq: 0 || null,
          duration: 0 || null,
          online: 0 || null,
          totalEnergy: 0 || null,
          totalDuration: 0 || null,
        },
        dc: [
          {
            power: 0 || null,
            voltage: 0 || null,
            current: 0 || null,
            energy: 0 || null,
          }
        ]
      }
    ]
  //}
};

export const get_data_reducer = (state = initialState, action: ActionType) => {
  switch (action.type){
    case SET_DATA:
      return {
        ...state,
        data: action.value,
      }
      default:
        return state;
  }
}