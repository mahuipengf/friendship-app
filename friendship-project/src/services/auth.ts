import request from './request';
// import axios from 'axios';
import {
    singUp
} from './api';

export async function SingUp (params: any) {
  console.log('params', params);
  return request.post(singUp, params)
}