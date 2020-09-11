import { mockedLaunches } from '../shared/mocks';
import { CustomRoute } from './custom-route';

export const routes: CustomRoute[] = [
  {
    path: '/launches/:id/details',
    method: 'post',
    handler: (req, res) => {
      const launch = mockedLaunches.find(launch => launch.id === +req.params.id)
      if (!launch) { return res.status(404).json(null); }

      launch.details = req.body.details;
      res.json(launch);
    }
  }
];
