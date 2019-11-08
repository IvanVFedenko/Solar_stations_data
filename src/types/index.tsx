type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

import * as constants from '.././store/constants';

export interface MyStore {
  //payload: {
    data: [
      {
        createdAt: string;
        inverterId: number;
        ac: {
          power: number | null;
          voltage: number | null;
          current: number | null;
          energy: number | null;
          freq: number | null;
          duration: number | null;
          online: number | null;
          totalEnergy: number | null;
          totalDuration: number | null;
        }
        dc: [
          {
            power: number | null;
            voltage: number | null;
            current: number | null;
            energy: number | null;
          }
        ]
      }
    ]
  }
//};

export interface Set_Data {
  type: constants.SET_DATA;
  value: Array<any>;
}

export type ActionType = Action<'SET_DATA', { value: any}>