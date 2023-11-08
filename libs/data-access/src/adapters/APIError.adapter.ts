import { AxiosError } from 'axios';

export const APIErrorAdapter = (error: unknown): Error => {
  let message: string;
  if (error instanceof AxiosError && error.response) {
    message = error.response.data.message ?? `[ ${error.response.status} ] ${error.response.statusText}`;
  } else {
    message = (error as Error).message;
  }
  return new Error(message);
};
