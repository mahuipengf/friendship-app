import axios from 'axios';
import {
    singUp
} from './api';

export async function SingUp (params: any) {
  console.log('params', params);
  return axios.post(singUp, params)
}