import axios from 'axios';
import { API_URL } from '../store/constants';

export const getData = async() => {
  const response = await axios.get(API_URL);
  const data = response.data;
  return data.payload.data;
}
