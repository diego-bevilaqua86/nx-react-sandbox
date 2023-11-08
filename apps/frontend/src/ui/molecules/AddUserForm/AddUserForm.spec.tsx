import { render } from '@testing-library/react';

import AddUserForm from './AddUserForm';

describe('AddUserForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AddUserForm
        onSubmit={(event) => {
          console.log(event);
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
