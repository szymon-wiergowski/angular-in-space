import { CustomRoute } from './custom-route';

export const routes: CustomRoute[] = [
  {
    path: '/flights/latest',
    method: 'get',
    handler: (req, res) => {
      res.json(null);
    }
  }
];
