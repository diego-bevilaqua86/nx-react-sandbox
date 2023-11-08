import { isNullOrUndefined } from '@nx-react-sandbox/utils';
import { Card } from 'react-bootstrap';
import { FallbackProps } from 'react-error-boundary';
import { toast } from 'react-toastify';
import { match } from 'ts-pattern';
import './ErrorCard.scss';

export interface ErrorCardProps extends FallbackProps {
  title?: string;
  message?: string;
}

export function ErrorCard({ title, message, error }: ErrorCardProps) {
  toast.error<Error>(error.message);

  return (
    <Card>
      <Card.Title>
        {match(title)
          .when(isNullOrUndefined, () => null)
          .otherwise((value) => value)}
      </Card.Title>
      <Card.Body>
        <p className='text-danger'>
          {match(message)
            .when(isNullOrUndefined, () => (error as Error).message)
            .otherwise((value) => value)}
        </p>
      </Card.Body>
    </Card>
  );
}

export default ErrorCard;
