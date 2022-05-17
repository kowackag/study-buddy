import { rest } from 'msw';
import { students } from 'mocks/data/students';
export const handler = [
  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ students }));
  }),
];
