import { render } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorMessage />);
    expect(baseElement).toBeTruthy();
  });
});
