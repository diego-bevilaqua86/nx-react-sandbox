import { render } from '@testing-library/react';

import AddUserModal from './AddUserModal';

describe('AddUserModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddUserModal />);
    expect(baseElement).toBeTruthy();
  });
});
