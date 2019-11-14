type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

import * as constants from '.././store/constants';

interface InverterDataAc {
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

interface InverterDataDc {
  power: number | null;
  voltage: number | null;
  current: number | null;
  energy: number | null;
}

interface inverterData {
  createdAt: string;
  inverterId: number;
  ac: InverterDataAc;        
  dc: InverterDataDc[];
}
export interface MyStore {
    data: inverterData[];
  }
export interface Set_Data {
  type: constants.SET_DATA;
  value: inverterData[];
}

export type ActionType = Action<'SET_DATA', { value: any}>