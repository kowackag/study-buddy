import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('NewsSection', () => {
  it('loading articles', async () => {
    renderWithProviders(<NewsSection />);
    const info = await screen.findByText('Loading...');
    expect(info).toBeInTheDocument();
  });
  it('render articles', async () => {
    renderWithProviders(<NewsSection />);
    await waitFor(() => {
      const info = screen.getAllByText('Lorem');
      expect(info[0]).toBeInTheDocument();
    });
  });
});
