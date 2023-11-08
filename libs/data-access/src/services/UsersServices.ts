import { AxiosResponse } from 'axios';
import { APIErrorAdapter } from '../adapters/APIError.adapter';
import { axiosInstance } from '../config/axios.config';
import { AddUserDTO, User } from '../types/User';

const USERS_ROUTE = '/users';
Object.freeze(USERS_ROUTE);

export const fetchAll = async (): Promise<Array<User>> => {
  const apiResponse = await axiosInstance.get<Array<User>, AxiosResponse<Array<User>>, unknown>(USERS_ROUTE);
  return apiResponse.data;
};

export const add = async (user: AddUserDTO): Promise<User> => {
  try {
    const apiResponse = await axiosInstance.post<User, AxiosResponse<User>, AddUserDTO>(USERS_ROUTE, user);
    return apiResponse.data;
  } catch (error) {
    throw APIErrorAdapter(error);
  }
};
