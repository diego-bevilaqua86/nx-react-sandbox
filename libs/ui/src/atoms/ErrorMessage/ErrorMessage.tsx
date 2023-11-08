import { isNullOrUndefined } from '@nx-react-sandbox/utils';
import { Fragment } from 'react';
import { match } from 'ts-pattern';
import './ErrorMessage.scss';

export type ErrorMessageProps = {
  message?: string;
  error: Error;
};

export function ErrorMessage({ message, error }: ErrorMessageProps) {
  return (
    <Fragment>
      {match(message)
        .when(isNullOrUndefined, () => <p className='text-danger'>{error.message}</p>)
        .otherwise((message) => (
          <Fragment>
            <p>{message}</p>
            <p className='text-danger'>{error.message}</p>
          </Fragment>
        ))}
    </Fragment>
  );
}

export default ErrorMessage;
