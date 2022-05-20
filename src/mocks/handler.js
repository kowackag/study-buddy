import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handler = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ students }));
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const machingStudents = students.filter(
        ({ group }) => group === req.params.group
      );
      return res(ctx.status(200), ctx.json({ students: machingStudents }));
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),
];
