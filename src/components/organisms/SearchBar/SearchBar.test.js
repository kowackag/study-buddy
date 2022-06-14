import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { handler } from 'mocks/handler';
import SearchBar from './SearchBar';

const server = setupServer(...handler);

describe('SearchBar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('Render the component', () => {
    render(<SearchBar />);
    expect(screen.getByText('Teacher')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('Display correct value of input', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    userEvent.type(input, 'ka');
    expect(input.value).toBe('ka');
  });

  it('Display value of input', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    userEvent.type(input, 'ka');
    expect(input.value).toBe('ka');
  });
});
