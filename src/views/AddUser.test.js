import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import userEvent from '@testing-library/user-event';

describe('Form Field', () => {
  // it('Check if name is displayed', () => {
  //   renderWithProviders(
  //     <>
  //       <AddUser />
  //       <Dashboard />
  //     </>
  //   );
  //   userEvent.type(screen.getByLabelText('Name'), 'Gosia');
  //   userEvent.type(screen.getByLabelText('Consent'));
  //   userEvent.type(screen.getByText('Add'));
  //   expect(screen.getByText('Gosia')).toBeInTheDocument();
  // });

  it('Check if name is displayed no 2', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('name'), {
      target: { value: 'Gosi' },
    });
    fireEvent.click(screen.getByLabelText('Consent'));
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Gosi')).toBeInTheDocument();
  });
});
