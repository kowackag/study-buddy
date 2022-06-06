import { render } from 'test-utils';
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
  });
});
